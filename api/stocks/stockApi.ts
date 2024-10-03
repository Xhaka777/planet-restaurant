import axios from 'axios'
import { SQLiteDatabase } from 'expo-sqlite'
import { API_CONSTANTS } from '../apiConstants'
import { Stock } from '@/types/Stock'
import { insertStock, getStock } from '@/database/stockModel'

export const getStockList = async (
    db: SQLiteDatabase,
    token: string,
    user_id: string
): Promise<Stock[] | null> => {
    try {
        const response = await axios.post(`${API_CONSTANTS.GET_STOCK}`, {
            token: token,
            user_id: user_id
        });
        if (response.data.success) {
            //Handle success
            console.log("response: ", response.data.data.items)
            const stocksFromApi: Stock[] = response.data.data.items.map((stock: any) => ({
                id: stock.id,
                name: stock.name,
                image: stock.image,
                quantity: stock.quantity,
                price: stock.price
            }));
            //Insert stocks into SQLite
            await insertStock(db, stocksFromApi);

            //return stocks from SQLite
            return await getStock(db);
        } else {
            //Handle error babo
            console.error("Error: ", response.data.error)
            return null;
        }
    } catch (error) {
        console.error("error while fetching stock", error);
        return null;
    }
}