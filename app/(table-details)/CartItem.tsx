import { addCartItem, removeCartItem, useCartDispatch } from "@/store";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Item } from "@/types/Stock";

type Props = {
    item: Item
}

const CartItem: React.FC<Props> = ({ item }) => {
    const dispatch = useCartDispatch();

    return(
        <View>
            <View style={styles.product}>
                <Text style={styles.heading}>{item.name}</Text>
                <View style={styles.amount}>
                    <Pressable onPress={() => dispatch(addCartItem(item))}>
                        <Text style={styles.add}>+</Text>
                    </Pressable>
                    <Pressable onPress={() => dispatch(removeCartItem(item))}>
                        <Text style={styles.delete}>-</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.detail}>
                <Text>{(parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2)}</Text>
                <Text>{item.price}X</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
      fontSize: 16,
      fontWeight: '600',
    },
    product: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingVertical: 8,
      paddingRight: 4,
    },
    detail: {
      paddingVertical: 8,
      flexDirection: 'row',
      marginBottom: 18,
      gap: 48,
    },
    amount: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 16,
    },
    add: {
      borderWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 4,
      textAlign: 'center',
    },
    delete: {
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 4,
      textAlign: 'center',
    },
  });
  
  export default CartItem;
  