import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export default userSlice.reducer;
