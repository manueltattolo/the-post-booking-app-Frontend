import React, { useMemo, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../features/restaurants/restaurantsSlice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const { restaurants = [] } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurant = useMemo(
    () => (restaurants).find(restaurant => restaurant.restName === 'VILLA ITALIA')
    , [restaurants]
  );
  console.log('restaurant', restaurant, restaurants)
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{restaurant?.restName}</h1>
        <h2>{restaurant?.address}</h2>
      </header>
      <div className={classes["main-image"]}>
        <img src={restaurant?.picture} alt="The restaurant pic" />
      </div>
    </Fragment>
  );
};

export default Header;
