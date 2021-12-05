import Card from "../../common/ui/Card";
import classes from "./BookingDate.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "./servicesSlice";
import { useRef } from "react";

const BookingDate = (props) => {
  var seatsSel = [...Array(21).keys()].slice(1);
  var hoursRest = [];
  for (var h = 17; h <= 22; h++) {
    hoursRest.push(h);
  }

  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const seatsInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();

  const availability = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.bookdate}>
      <form onSubmit={submitHandler}>
        <div className={classes.title}>
          <h3>Book a table</h3>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.box}>
            <label httpFor="seatsNo">Seats:</label>
            <br></br>
            <select ref={seatsInputRef} id="seatsNo">
              {seatsSel.map((number) => {
                return <option value={number}>{number}</option>;
              })}
            </select>
          </div>
          <div className={classes.box}>
            <label httpFor="date">Day:</label>
            <br></br>
            <input ref={dateInputRef} type="date" id="date"></input>
          </div>
          <div className={classes.box}>
            <label httpFor="time">Time:</label>
            <br></br>
            <select
              ref={timeInputRef}
              type="time"
              id="time"
              min="17:00"
              max="22:00"
            >
              {hoursRest.map((time) => {
                return <option value={time}>{time}</option>;
              })}
            </select>
          </div>
        </div>
        <div className={classes.butt}>
          <button>Find a table</button>
        </div>
      </form>
    </Card>
  );
};

export default BookingDate;
