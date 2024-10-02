import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,
    ViewStyle,
    TextStyle
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeProvider'
import SearchInput from '@/components/SearchInput'
import ItemCard from '@/components/ItemCard'
import { useNavigation } from '@react-navigation/native'
import { useSQLiteContext } from 'expo-sqlite'
import { getStockList } from "@/api/stocks/stockApi"
import { getStocks } from '@/database/stockModel'
import { Stock } from '../types/Stock'

interface Item {
    name: string;
}

interface Styles {
    tab: (activeCardTypes: string, item: Item) => ViewStyle;
    tabText: (activeCardTypes: string, item: Item) => TextStyle;
}

const Details: React.FC<{ activeCardTypes: string; item: Item }> = ({
    activeCardTypes,
    item
}) => {
    const styles: Styles = {
        tab: (activeCardTypes, item) => ({
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 16,
            backgroundColor: activeCardTypes === item.name ? "#705cb4" : "#C1C0C8",
            shadowColor: activeCardTypes === item.name ? "#705cb4" : "#C1C0C8",
            shadowOffset: { width: 4, height: 2 },
            shadowOpacity: 3.25,
            shadowRadius: 13.84,
            elevation: 8,
        }),
        tabText: (activeCardTypes, item) => ({
            fontFamily: "Poppins-Medium, sans-serif",
            color: activeCardTypes === item.name ? "#fff" : "#000",
        }),
    }

    const db = useSQLiteContext();

    const { theme, toggleTheme } = useTheme();
    const [data, setData] = useState([]);
    const [stocks, setStocks] = useState<Stock[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [categoryData, setCategoryData] = useState([]);
    const [activeCardType, setActiveCardType] = useState("Ushqim")
    const navigation = useNavigation();

    const token =
        "723ec245f0a4510bd19b08231fdd956252646360b752345e501507d2db370fab";
    const user_id = "3527";

    const category = async () => {
        try {
            const response = await categoryList(token, user_id);
            setCategoryData(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    const fetchStock = async () => {
        try {
            //Fetch some stock daddy
            const stockAPI = await getStockList(db, token, user_id);
            if (stockAPI) {
                const stocksFromDB = await getStocks(db);

                setStocks(stocksFromDB);
            } else {
                console.error("Failed to fetch stocks from API")
            }
        } catch (error) {
            console.error("Error fetchin stocks: ", error)
            setLoading(false)
        }
    }

    const deleteStock = async () => {
        try {
            await db.runAsync('DELETE FROM stocks');
            setStocks({ id: 0, name: "", image: "", quantity: "", price: "" })
        } catch (error) {
            console.error("error while deleting the stocks", error);
        }
    }

    useEffect(() => {
        fetchStock();
        category();
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
            <View className='flex my-6 px-4 space-y-6 mt-20'>
                <SearchInput />
                <FlatList
                    data={categoryData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ styles.tab(activeCardType, item) }}
                        >
                            <Text style={styles.tabText(activeCardType, item)}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{ columnGap: 12 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemCard name={item.name} image={item.cover} price={item.quantity} />
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            <Button title='DELETE' onPress={() => deleteStock()} />
        </SafeAreaView>
    )

}

export default Details;