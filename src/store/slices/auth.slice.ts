import { createSlice } from "@reduxjs/toolkit";
type AuthSliceType = {
  accessToken?: string;
  user?: {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string;
    phone: string;
    role: string;
  };
};
const initialState: AuthSliceType = {
  accessToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
  },
});

export const { login } = authSlice.actions;
