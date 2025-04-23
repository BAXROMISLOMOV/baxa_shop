import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types";

type LikeState = {
  items: ProductType[];
};

const initialState: LikeState = {
  items: [],
};

const likeSlice = createSlice({ 
  name: "Like",
  initialState,
  reducers: {
    like: (state, action: PayloadAction<ProductType>) => {
      const isLiked = state.items.find((i) => i.id === action.payload.id);
      if (isLiked) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { like } = likeSlice.actions;
export default likeSlice.reducer;
