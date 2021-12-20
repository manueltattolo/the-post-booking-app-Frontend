import Card from "../../common/ui/Card";
import classes from "./BookingConfirmation.module.css";

const BookingConfirmation = () => {
  return (
    <Card className={classes.book}>
        <form>
          <h1>Book your table now!</h1>
          <div className={classes.control}>
            <label htmlFor="firstname">Your first name</label>
            <input type="text" id="firstname" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="lastname">Your last name</label>
            <input type="text" id="lastname" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="lastname">Your last name</label>
            <input type="text" id="lastname" required />
          </div>
        </form>
    </Card>
  );
};

export default BookingConfirmation;
