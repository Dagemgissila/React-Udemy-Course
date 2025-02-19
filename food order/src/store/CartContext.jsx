import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => {
      item.id = action.item.id;
    });
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const exstingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...exstingItem,
        quantity: exstingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "REMOVE_ITEM") {
  }
  return state;
}

function CartContextProvider({ children }) {
  useReducer(cartReducer, { items: [] });
  return <CartContext>{children}</CartContext>;
}

export default CartContext;
