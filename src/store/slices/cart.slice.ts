import { ProductType } from "@/components/layout/Products";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ProductType[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
