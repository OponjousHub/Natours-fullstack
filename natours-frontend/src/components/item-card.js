import classes from "./item-card.module.css";

function ItemCard({ seaImg, ...props }) {
  return (
    <div className={classes.review_card_container}>
      <div className={classes.review_card_box}>
        <img src={seaImg} alt="Review image" />
        <div className={classes.review_text}>
          <h2>{props.title[0]}</h2>
          <p>{props.text}</p>
        </div>
        <p className={classes.control}>
          <button className={classes.delete}>Delete</button>
          <button className={classes.edit}>Edit</button>
        </p>
      </div>
      <div className={classes.review_card_box}>
        <img src={props.ForestImg} alt="Review image" />
        <div className={classes.review_text}>
          <h2>{props.title[1]}</h2>
          <p>{props.text}</p>
        </div>
        <p className={classes.control}>
          <button className={classes.delete}>Delete</button>
          <button className={classes.edit}>Edit</button>
        </p>
      </div>
      <div className={classes.review_card_box}>
        <img src={props.SnowImg} alt="Review image" />
        <div className={classes.review_text}>
          <h2>{props.title[2]}</h2>
          <p>{props.text}</p>
        </div>
        <p className={classes.control}>
          <button className={classes.delete}>Delete</button>
          <button className={classes.edit}>Edit</button>
        </p>
      </div>
    </div>
  );
}

export default ItemCard;
