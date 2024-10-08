import { Item } from "@/types/Stock";

export const ADD = 'ADD' as const;
export const REMOVE = 'REMOVE' as const;
export const SHOWCART = 'SHOWCART' as const;
export const SET_INITIAL_CART = 'SET_INITIAL_CART' as const;

export const addCartItem = (item: Item) => ({
    type: ADD,
    payload: item
});

export const removeCartItem = (item: Item) => ({
    type: REMOVE,
    payload: item
})

export const openCart = (toogle: boolean) => ({
    type: SHOWCART,
    payload: toogle
})

export const setInitialCart = (cart: Item[]) => ({
    type: SET_INITIAL_CART,
    payload: cart
})