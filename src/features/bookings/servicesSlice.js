import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk(
    "services/getServices",
    async (offsettimeValue) => {
      //debugger
      try {
      return await fetch(`http://localhost:8066/api/v1/services/${offsettimeValue}`).then((res) =>
        res.json()
      ); } catch (error) {}
    }
  );

  const servicesSlice = createSlice({
    name: "service",
    initialState: {
      services: [],
      status: null,
    },
    extraReducers: {
      [getServices.pending]: (state, action) => {
        state.status = "loading";
      },
      [getServices.fulfilled]: (state, action) => {
        state.status = "success";
        state.services = action.payload;
      },
      [getServices.rejected]: (state, action) => {
        state.status = "failed";
      },
    },
  });
  
  export default servicesSlice.reducer;
  