// import { Product } from "@/types/Product";
import { Item } from "@/types/Stock";

export const ADD = 'ADD' as const;
export const REMOVE = 'REMOVE' as const;
export const SHOWCART = 'SHOWCART' as const;
export const SET_INITIAL_CART = 'SET_INITIAL_CART' as const;

export const addCartItem = (product: Item) => ({
  type: ADD,
  payload: product,
});

export const removeCartItem = (product: Item) => ({
  type: REMOVE,
  payload: product,
});

export const openCart = (toggle: boolean) => ({
  type: SHOWCART,
  payload: toggle,
});

export const setInitialCart = (cart: Item[]) => ({
  type: SET_INITIAL_CART,
  payload: cart,
});
