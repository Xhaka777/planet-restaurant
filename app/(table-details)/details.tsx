import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,
    ViewStyle,
    TextStyle,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeProvider'
import SearchInput from '@/components/SearchInput'
import ItemCard from '@/components/ItemCard'
import { useNavigation } from '@react-navigation/native'
import { useSQLiteContext } from 'expo-sqlite'
import { getStockList } from '@/api/stocks/stockApi'
import { getStock } from '@/database/stockModel'
import { Stock } from '../../types/Stock'
// import { BlurView } from '@react-native-community/blur'
import { BlurView } from 'expo-blur'
import { SymbolView } from 'expo-symbols'

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

    const fetchStock = async () => {
        try {
            //Fetch some stock daddy
            const stockAPI = await getStockList(db, token, user_id);
            if (stockAPI) {
                const stocksFromDB = await getStock(db);

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
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: theme.background }}>
            <View className='flex my-6 px-4 space-y-6 mt-20'>
                <SearchInput />
                {/* <FlatList
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
                /> */}
            </View>
            <FlatList
                data={stocks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemCard name={item.name} image={item.cover} price={item.quantity} />
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            {/* <Button title='DELETE' onPress={() => deleteStock()} /> */}
            <BlurView
                experimentalBlurMethod="dimezisBlurView"
                intensity={90}
                tint={"light"}
                style={styless.blur}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <View>
                        <Text style={{ color: "gray" }}>Lifetime savings</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 28 }}>
                            $123,823.50
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("Payment")}
                    >
                        <SymbolView
                            size={48}
                            type="palette"
                            name="checkmark.circle"
                            colors={["black", "transparent"]}
                            style={{ backgroundColor: "#00000010", borderRadius: 50 }}
                            fallback={
                                <Button
                                    title="open"
                                    onPress={() => navigation.navigate("Payment")}
                                />
                            }
                        />
                    </TouchableOpacity>
                </View>
            </BlurView>
        </View>
    )

}

export default Details;

const styless = StyleSheet.create({
    blur: {
      width: "100%",
      height: 110,
      position: "absolute",
      bottom: 0,
      borderTopWidth: 1,
      borderTopColor: "#00000010",
      padding: 16,
    },
  });