import { createSlice } from '@reduxjs/toolkit'
import { fetchRestaurants } from '../thunks'

const initialState = {
  restaurants: [],
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
   
  },

  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {

      // state.restaurants=action.payload;
   
      //state.restaurants.push(action.payload)
    }).addCase(fetchRestaurants.rejected, (state, action) => {

        
        
      }).addCase(fetchRestaurants.pending, (state, action) => {
       
      })
  },

})

// Action creators are generated for each case reducer function
export const { } = restaurantSlice.actions

export default restaurantSlice.reducer