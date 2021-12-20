import Card from "../../common/ui/Card";
import classes from "./BookingDate.module.css";
import React, { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServices } from "./servicesSlice";
import AlertDialog from "../../common/ui/AlertDialog";
import ButtonSizes from "../../common/ui/AlertDialog";
import BookingConfirmation from "./BookingConfirmation";

const BookingDate = (props) => {
  var seatsSel = [...Array(6).keys()].slice(1);
  var hoursRest = [];
  for (var h = 17; h <= 22; h++) {
    hoursRest.push(h);
  }

  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);
  const { restaurants = [] } = useSelector((state) => state.restaurants);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");
  const [isAvailable, setIsAvailable] = useState("Not_Checked");

  const restaurant = useMemo(
    () => (restaurants).find(restaurant => restaurant.restName === 'VILLA ITALIA')
    , [restaurants]
  );

  const valueChange = (event) => {
    setDate(event.target.value);
  };

  const timeChange = (event) => {
    setTime(event.target.value);
  };
  const seatsChange = (event) => {
    setSeats(event.target.value);
  };

  const offsettimeValue = () => {
  
    return `${date}T${time}:00:00+01:00`;
    //2021-12-05T12:31:25+01:00
  };

  const checkAvail = () => {
    dispatch(getServices(offsettimeValue()));
  };

  useEffect(() => {
    if (services.length >= 0 && restaurants.length > 0) {
    availability();
    }
  }, [services]);

  const inputValid = ()  => {
    return date.length > 0 && time.length > 0;
  }

  useEffect(() => {
    inputValid();
  }, [date, time]);

  const availability = () => {
    var numbSeats = restaurant.tablesNo - services.length;
    if (numbSeats >= 0) {
      setIsAvailable("Available");
    } else {
      setIsAvailable("Not_available");
    }
  };

  return (
    <div> {"Not_Checked" === isAvailable ? 
      <Card className={classes.bookdate}>
        <div className={classes.title}>
          <h3>Book a table</h3>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.box}>
            <label httpFor="seatsNo">Seats:</label>
            <br></br>
            <select onChange={seatsChange} id="seatsNo">
              {seatsSel.map((number) => {
                return <option value={number}>{number}</option>;
              })}
            </select>
          </div>
          <div className={classes.box}>
            <label httpFor="date">Day:</label>
            <br></br>
            <input onChange={valueChange} required type="date" id="date"></input>
          </div>
          <div className={classes.box}>
            <label httpFor="time">Time:</label>
            <br></br>
            <select
              onChange={timeChange}
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
          { inputValid() ? <button onClick={checkAvail}>Find a table</button> : <AlertDialog> <button> Find a Table </button> </AlertDialog> }
        </div>
      </Card> : "Available" === isAvailable ?
      <BookingConfirmation /> : 
      <div>
        <p>No seats are available in the restaurant</p>
      </div>
            }
    </div>
  );
};

export default BookingDate;
