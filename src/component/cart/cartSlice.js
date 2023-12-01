import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  status: "",
  // id for setting the value for product profile ( product id to be displayed on click on imag)
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //reducer for adding items to the cart
    addItem: (state, action) => {
      //finding the item....
      const itemFound = state.items.find(
        (item) => item.id === action.payload.id
      );

      const cartId =
        action.payload.id + action.payload.size + action.payload.color;

      //checking if the added item is already there  in the cart
      if (itemFound) {
        //if added cart has same color size then it would be added to preexisted items with updated quantity
        if (
          itemFound.size === action.payload.size &&
          itemFound.color === action.payload.color
        ) {
          //updating the existed item
          state.items = state.items.map((item) => {
            if (item.id === action.payload.id) {
              const updatedItem = {
                ...itemFound,
                quantity:
                  Number(itemFound.quantity) + Number(action.payload.quantity),
              };
              return updatedItem;
            } else {
              //if not matching size and color then add as another item
              return {item};
            }
          });
          //if not same then add item
        } else {
          state.items.push({...action.payload,cartId:cartId});
        }
        //if item not exited (new item ) then add the item
      } else state.items.push({ ...action.payload,cartId:cartId });
    },
    //reducer for removing items from the cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.cartId != action.payload);
    },
    editItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.cartId === action.payload.id) {
          return { ...item, quantity: action.payload.value };
        } else return item;
      });
    },
  },
});

export const { addItem, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
