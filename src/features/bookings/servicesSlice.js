import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk(
    "services/getServices",
    async (dispatch, offsettimeValue) => {
      try {
      return await fetch(`http://localhost:8016/api/v1/services/${offsettimeValue}`).then((res) =>
        res.json()
      ); } catch (error) {}
    }
  );

  const servicesSlice = createSlice({
    name: "service",
    initialState: {
      bookings: [],
      status: null,
    },
    extraReducers: {
      [getServices.pending]: (state, action) => {
        state.status = "loading";
      },
      [getServices.fulfilled]: (state, action) => {
        state.status = "success";
        state.bookings = action.payload;
      },
      [getServices.rejected]: (state, action) => {
        state.status = "failed";
      },
    },
  });
  
  export default servicesSlice.reducer;
  