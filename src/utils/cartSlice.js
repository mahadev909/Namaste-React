import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "card",
  initialState: {
    Items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.Items.push(action.payload);
    },
    removeItem: (state) => {
      state.Items.pop();
    },
    clearCart: (state) => {
      state.Items.length = 0;
    },
  },
});
export const { addItems, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
