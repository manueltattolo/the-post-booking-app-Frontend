import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";
import servicesReducer from "../features/bookings/servicesSlice";

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    services: servicesReducer,
  },
});

export default store;
