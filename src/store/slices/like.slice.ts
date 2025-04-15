import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../components/layout/Products"; 

type LikeState = {
  items: ProductType[];
};

const initialState: LikeState = {
  items: [],
};

const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {
    addLike(state, action: PayloadAction<ProductType>) {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      if (!isExist) {
        state.items.push(action.payload);
      }
    },
    removeLike(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addLike, removeLike } = likeSlice.actions;
export default likeSlice.reducer;
