import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart.slice";
import likeReducer from "./slices/like.slice";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    like: likeReducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
