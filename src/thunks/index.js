// First, create the thunk
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../interceptors"
export const fetchRestaurants = createAsyncThunk(
    'restaurant/fetchRestaurants',
    async () => {
     
      const response = await axios.get("/todos/1")
      return response.data
    }
  )