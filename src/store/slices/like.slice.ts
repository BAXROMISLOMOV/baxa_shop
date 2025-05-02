import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/components/layout/Products";

type LikeState = {
  items: ProductType[];
};

const initialState: LikeState = {
  items: [],
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<ProductType>) => {
      const exists = state.items.find((item) => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    removeLike: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggleLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
