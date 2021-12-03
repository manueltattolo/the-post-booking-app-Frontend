import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (dispatch, getState) => {
    try {
    return await fetch("http://localhost:8016/api/v1/restaurants").then((res) =>
      res.json()
    ); } catch (error) {}
  }
);

const restaurantsSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
    status: null,
  },
  extraReducers: {
    [getRestaurants.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRestaurants.fulfilled]: (state, action) => {
      state.status = "success";
      state.restaurants = action.payload;
    },
    [getRestaurants.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default restaurantsSlice.reducer;
