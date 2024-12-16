import ItemCard from "../item-card";
import SeaImg from "../../img/tours/tour-2-cover.jpg";
import ForestImg from "../../img/tours/tour-1-cover.jpg";
import SnowImg from "../../img/tours/tour-3-cover.jpg";
import CityImg from "../../img/tours/tour-4-cover.jpg";
import classes from "./adminTourCard.module.css";
import { Link } from "react-router-dom";

function TourCard() {
  const text = `Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const titles = [
    "The sea Explorer inside the ocean",
    "The forest hicker",
    "The snow adventurer",
    "The city wanderer",
  ];
  return (
    <>
      <h1 className={classes.manage}>manage tours</h1>

      <div className={classes.review_card_container}>
        <div className={classes.review_card_box}>
          <img src={SeaImg} alt="Review image" />
          <div className={classes.review_text_btnBox}>
            <div className={classes.review_text}>
              <h2>{titles[0]}</h2>
              <p>{text}</p>
            </div>
            <p className={classes.control}>
              <button className={classes.delete}>Delete</button>
              <button className={classes.edit}>Edit</button>
            </p>
          </div>
        </div>
        <div className={classes.review_card_box}>
          <img src={ForestImg} alt="Review image" />
          <div className={classes.review_text_btnBox}>
            <div className={classes.review_text}>
              <h2>{titles[1]}</h2>
              <p>{text}</p>
            </div>
            <p className={classes.control}>
              <button className={classes.delete}>Delete</button>
              <button className={classes.edit}>Edit</button>
            </p>
          </div>
        </div>
        <div className={classes.review_card_box}>
          <img src={SnowImg} alt="Review image" />
          <div className={classes.review_text_btnBox}>
            <div className={classes.review_text}>
              <h2>{titles[2]}</h2>
              <p>{text}</p>
            </div>
            <p className={classes.control}>
              <button type="button" className={classes.delete}>
                Delete
              </button>
              <Link to={"edit"}>
                <button type="button" className={classes.edit}>
                  Edit
                </button>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TourCard;
