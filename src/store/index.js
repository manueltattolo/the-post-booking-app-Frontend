import { configureStore } from '@reduxjs/toolkit'
import restaurants from '../reducers/restaurants'

export const store = configureStore({
  reducer: {
    restaurants:restaurants
  },
})