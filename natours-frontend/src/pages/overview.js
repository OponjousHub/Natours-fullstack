import TourCard from "../components/tourCard";
import classes from "./overview.module.css";

function OverviewPage() {
  return (
    <div className={classes.tours_container}>
      <TourCard />
    </div>
  );
}

export default OverviewPage;
