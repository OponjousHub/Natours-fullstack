import { Star } from "@phosphor-icons/react";
import TourImg from "../../img/tours/tour-2-cover.jpg";
import classes from "./manageReview.module.css";
import { Link } from "react-router-dom";

import SeaImg from "../../img/tours/tour-2-cover.jpg";
import ForestImg from "../../img/tours/tour-1-cover.jpg";
function ManageReview() {
  const titles = [
    "The sea Explorer inside the ocean",
    "The forest hicker",
    "The snow adventurer",
    "The city wanderer",
  ];
  return (
    <>
      <div className={classes.head}>
        <h1 className={classes.manage}>View Reviews</h1>
        <p className={classes.total}>
          Total reviews<span>245</span>
        </p>
      </div>
      <div className={classes.review_card_container}>
        <div className={classes.review_card_box}>
          <img src={SeaImg} alt="Review image" />
          <div className={classes.review_text_btnBox}>
            <div className={classes.review_text}>
              <h2>{titles[0]}</h2>
            </div>
            <p className={classes.control}>
              <p>
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
              </p>
              <span>67</span>Reviews
            </p>
          </div>
        </div>
        <div className={classes.review_card_box}>
          <img src={ForestImg} alt="Review image" />
          <div className={classes.review_text_btnBox}>
            <div className={classes.review_text}>
              <h2>{titles[1]}</h2>
            </div>
            <p className={classes.control}>
              <p>
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
                <Star size={17} color="#a2a2a2" />
              </p>
              <span>45</span>Reviews
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default ManageReview;
