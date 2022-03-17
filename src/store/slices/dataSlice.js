import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataRequested: (state) => {
      state.items = [];
      state.isLoading = true;
    },
    dataReceived: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
  },
});

export const { dataRequested, dataReceived } = dataSlice.actions;

export default dataSlice.reducer;
