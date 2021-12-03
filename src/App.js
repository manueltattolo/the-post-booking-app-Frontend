import React from "react";
import Header from "./common/layout/Header";
import BookingPage from "./features/bookings/BookingDate";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BookingPage />
    </div>
  );
}

export default App;
