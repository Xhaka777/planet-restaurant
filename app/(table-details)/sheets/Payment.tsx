import { Button, FlatList, Pressable, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@/context/ThemeProvider";
// import { BlurView } from '@react-native-community/blur'
import { BlurView } from 'expo-blur'
import { useSelector } from "react-redux";
import { openCart, selectCartAmount, selectCartItems, selectShowCart, useCartDispatch } from "@/store";
import Heading from "@/components/Heading";
import CartItem from "../CartItem";

export default function Payment() {
    const { theme, toggleTheme } = useTheme();
    const navigation = useNavigation();

    const cartItems = useSelector(selectCartItems);
    const showCart = useSelector(selectShowCart);
    const amount = useSelector(selectCartAmount);

    const dispatch = useCartDispatch();

    const totalPrice = cartItems.reduce(function (acc, prod) {
        return acc + parseFloat(prod.price) * (prod.quantity || 1); // multiplying by quantity if it exists, otherwise 1
    }, 0); // start accumulator at 0
    

    return (
        <View style={{ flex: 1 }}>
            <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
                <View />
            </Pressable>
            <BlurView
                experimentalBlurMethod="dimezisBlurView"
                intensity={90}
                tint="light"
                style={{
                    height: '50%',
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    elevation: 8,
                    shadowColor: '#000',
                    shadowRadius: 8,
                    shadowOpacity: 0.15,
                    padding: 16
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={{ color: '#007AFF', fontSize: 17 }}>Cancel</Text>
                    </Pressable>
                </View>
                {/* <View style={{ gap: 10, paddingTop: 16 }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: 'gray'
                        }}
                    >
                        Pare pare ....
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 32,
                            fontWeight: '900',
                            marginTop: 16
                        }}
                    >
                        123,123
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        a ki sok t'zi edhe ni hamburgj
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        style={{
                            backgroundColor: 'black',
                            padding: 10,
                            borderRadius: 10,
                            marginTop: 16
                        }}
                    >
                        <Text></Text>
                    </TouchableOpacity>
                </View> */}
                {!cartItems.length ? (
                    <View style={styles.empty}>
                       <Button 
                           title={'No items (yet!)'}
                           color='#ff6900'
                           onPress={() => dispatch(openCart(false))} 
                       /> 
                    </View>
                ):(
                  <>
                  <Heading>
                    ({amount})
                  </Heading>
                  <View style={styles.products}>
                    <FlatList 
                        data={cartItems}
                        renderItem={({item}) => <CartItem item={item}/>}
                        keyExtractor={({ id }) => id}
                    />
                  </View>
                  <View style={styles.total}>
                    <Heading>{'Total Amount'}</Heading>
                    <Heading>{totalPrice} $</Heading>
                  </View>
                  <Button title={'Order'} color='#ff6900'/>
                  </>      
                )}
            </BlurView>
        </View>
    )
}


const styles = StyleSheet.create({
    cart: {
      paddingTop: 50,
      alignItems: 'center',
      paddingHorizontal: 24,
      width: '100%',
      maxWidth: 720,
    },
    empty: {
      width: '100%',
      paddingTop: 50,
    },
    close: {
      width: '100%',
      alignItems: 'flex-end',
      paddingHorizontal: 24,
    },
    products: {
      width: '100%',
      paddingTop: 24,
      borderBottomWidth: 1,
      borderColor: '#d2d3d5',
    },
    total: {
      padding: 24,
      paddingVertical: 32,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });