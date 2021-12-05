import Card from "../../common/ui/Card";
import classes from "./BookingDate.module.css";
import React, { useState, useEffect } from "react";
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
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const seatsInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();

  const valueChange = (event) => {
    setDate(event.target.value);
  };

  const timeChange = (event) => {
    setTime(event.target.value);
  }

  const offsettimeValue = () => {
    return `${date}T${time}:00:00.000Z`;
    //2021-12-05T12:31:25.956Z
  }
  console.log(date);
  console.log(new Date().toISOString());

  const submitHandler = (event) => {
    event.preventDefault();

    const availability = () => {};
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
            <input
              onChange={valueChange}
              ref={dateInputRef}
              type="date"
              id="date"
            ></input>
          </div>
          <div className={classes.box}>
            <label httpFor="time">Time:</label>
            <br></br>
            <select
              onChange={timeChange}
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
