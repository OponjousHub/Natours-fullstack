import ReviewCard from "../components/review/reviewCard";
import classes from "./settingsRootLayout.module.css";

function Reviews() {
  return (
    <>
      <h1 className={classes.booked}>Your Reviews</h1>
      <ReviewCard />;
    </>
  );
}

export default Reviews;
