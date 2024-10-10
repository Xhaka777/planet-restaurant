import { ADD, REMOVE, SHOWCART, SET_INITIAL_CART } from '../actions';
import { setStoreData } from '@/helper';

export type Item = {
  name: string;
  price: string; // Price is a string type
  quantity: number; // Assuming quantity is a number
};

export type CartState = {
  cartItems: Item[];
  showCart: boolean;
};

export const initialCartState: CartState = {
  cartItems: [],
  showCart: false,
};

type Action = {
  type: string;
  payload?: any;
};

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
      let updatedCart;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          price: (parseFloat(existingCartItem.price) + parseFloat(action.payload.price)).toFixed(2), // Update price
          quantity: existingCartItem.quantity + 1, // Keep track of quantity
        };
        updatedCart = [...state.cartItems];
        updatedCart[existingCartItemIndex] = updatedItem;
        setStoreData(updatedCart, 'cart');
        return { ...state, cartItems: updatedCart };
      } else {
        const newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }]; // Initialize quantity
        setStoreData(newCartItems, 'cart');
        return { ...state, cartItems: newCartItems };
      }
    }

    case REMOVE: {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedCart;

      if (existingCartItem?.quantity > 1) {
        const updatedItem = {
          ...existingCartItem,
          price: (parseFloat(existingCartItem.price) - parseFloat(action.payload.price)).toFixed(2), // Update price
          quantity: existingCartItem.quantity - 1, // Decrease quantity
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
    }

    case SET_INITIAL_CART:
      return { ...state, cartItems: action.payload };

    case SHOWCART:
      return { ...state, showCart: action.payload };

    default:
      return state;
  }
};
