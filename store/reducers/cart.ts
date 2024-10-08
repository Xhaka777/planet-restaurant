import { ADD, REMOVE, SHOWCART, SET_INITIAL_CART } from "../actions";
import { setStoreData} from '@/helper'
import { Item } from "@/types/Stock";

export type CartState = {
    cartItems: Item[];
    showCart: boolean;
}

export const initialCartState: CartState = {
    cartItems: [],
    showCart: false,
}

type Action = {
    type: string;
    payload?: any;
}

export const cartReducer = (
    state: CartState = initialCartState,
    action: Action
) => {
    switch (action.type) {
        case ADD: {
            const existingCartItemIndex = state.cartItems.findIndex(
                (item) => item.name === action.payload.name
            );
            const existingCartItem = state.cartItems[existingCartItemIndex];
            let updateCart;
            if(existingCartItem) {
                const updatedItem ={
                    ...existingCartItem,
                    price: existingCartItem.price + 1,
                }
                updateCart = [...state.cartItems];
                updateCart[existingCartItemIndex] = updatedItem;
                setStoreData(updateCart, 'cart');
                return { ...state, cartItems: updateCart};
            }else {
                const newCartItems = [...state.cartItems, action.payload];
                setStoreData(newCartItems, 'cart');
                return {...state, cartItems: newCartItems};
            }
        }

        case REMOVE:
            const existingCartItemIndex = state.cartItems.findIndex(
              (item) => item.name === action.payload.name
            );
            const existingCartItem = state.cartItems[existingCartItemIndex];
            let updatedCart;
            if (existingCartItem?.price > 1) {
              const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.price - 1,
              };
              updatedCart = [...state.cartItems];
              updatedCart[existingCartItemIndex] = updatedItem;
              setStoreData(updatedCart, 'cart');
              return { ...state, cartItems: updatedCart };
            } else {
              const newCart = state.cartItems.filter(
                (item) => item.name !== action.payload.name
              );
              setStoreData(newCart, 'cart');
              return { ...state, cartItems: newCart };
            }
      
          case SET_INITIAL_CART:
            return { ...state, cartItems: action.payload };
      
          case SHOWCART:
            return { ...state, showCart: action.payload };
      
          default:
            return state;
        }
}