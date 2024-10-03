import { SQLiteDatabase } from "expo-sqlite";
import { Stock } from "@/types/Stock";

export async function insertStock(db: SQLiteDatabase, stock: Stock[]) {
    try {
        await db.withTransactionAsync(async () => {
            for (const newStock of stock) {
                await db.runAsync(
                    `INSERT OR IGNORE INTO stocks (id, name, image, quantity, price) VALUES (?, ?, ?, ?, ?);`,
                    [
                        newStock.id,
                        newStock.name,
                        newStock.image,
                        newStock.quantity,
                        newStock.price
                    ]
                );
            }
        });
        console.log("All stocks inserted into the database")
    } catch (error) {
        console.error("Failed to insert stock", error)
        throw Error("Failed to insert stock into database");
    }
}

export const getStock = async (db: SQLiteDatabase): Promise<Stock[]> => {
    try {
        const stocks: Stock[] = [];

        //Execute the query and get the results
        const results = await db.getAllAsync("SELECT * FROM stocks");

        if (results) {
            results.forEach((row) => {
                const stockRow = row as Stock;
                stocks.push({
                    id: stockRow.id,
                    name: stockRow.name,
                    image: stockRow.image,
                    quantity: stockRow.quantity,
                    price: stockRow.price
                })
            })
        }
        return stocks;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to get stocks from the database")
    }
}