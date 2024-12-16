import classes from "./orderCard.module.css";
import SeaImg from "../img/tours/tour-2-cover.jpg";
import ForestImg from "../img/tours/tour-1-cover.jpg";
import SnowImg from "../img/tours/tour-3-cover.jpg";
import CityImg from "../img/tours/tour-4-cover.jpg";
function OrderCard() {
  return (
    <>
      <div className={classes.order_container}>
        <div className={classes.order_card}>
          <img src={SeaImg} alt="imag of" />
          <div className={classes.order_box}>
            <h3>The Sea Explorer</h3>
            <p>December 12th, 2024</p>
          </div>
        </div>
        <div className={classes.order_card}>
          <img src={ForestImg} alt="imag of" />
          <div className={classes.order_box}>
            <h3>The Forest Hicker</h3>
            <p>December 12th, 2024</p>
          </div>
        </div>
        <div className={classes.order_card}>
          <img src={SnowImg} alt="imag of" />
          <div className={classes.order_box}>
            <h3>The Snow Adventurer</h3>
            <p>December 12th, 2024</p>
          </div>
        </div>
        <div className={classes.order_card}>
          <img src={CityImg} alt="imag of" />
          <div className={classes.order_box}>
            <h3>The City Wanderer</h3>
            <p>December 12th, 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderCard;
