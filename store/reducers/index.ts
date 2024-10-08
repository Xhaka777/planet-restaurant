import { CartState, cartReducer } from "./cart";
import { combineReducers } from "redux";


export type RootState = {
    cart: CartState;
}

export const rootReducer = combineReducers({
    cart: cartReducer
})