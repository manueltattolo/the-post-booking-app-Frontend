import { Tabs } from "antd";
import BookingCard from "../components/BookingCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../thunks";

const { TabPane } = Tabs;

function BookingPage() {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants);
  console.log(restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants()); // I am sending the action // like button
  }, []);
  
  return (
    <div>
      <h1>Book your table</h1>
      <h1>Title --HEre -- {restaurants.restaurants.title}</h1>
      <BookingCard />
    </div>
  );
}

export default BookingPage;
