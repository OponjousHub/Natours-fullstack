import { useLoaderData } from "react-router-dom";
import { MapPin, Flag, CalendarBlank, Users } from "@phosphor-icons/react";
import TourImg from "../img/tours/tour-2-cover.jpg";
import classes from "./tourCard.module.css";
import { Link } from "react-router-dom";

function TourCard() {
  const dataa = useLoaderData();
  console.log(dataa.data.tours);
  return (
    <ul className={classes.article_box}>
      {dataa.data.tours.map((tour) => (
        <article key={tour.id} className={classes.tour_box}>
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
            }}
            className={classes.tour_img}
          >
            <h3 className={classes.tour_title}>
              <span>{tour.name}</span>
            </h3>
          </div>
          <div className={classes.bottom_card}></div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>
                {`${tour.difficulty} ${tour.duration}-day Tour`}
              </p>
              <p className={classes.descrip}>{tour.summary}</p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>{tour.startLocation.description}</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>{tour.startDates[0]}</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>
                  {`${tour.locations.length} stops`}
                  {console.log(tour.locations.length)}
                </p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>{`${tour.maxGroupSize} people`}</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>{tour.price}</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>{tour.ratingAverage} </span>rating ({tour.ratingQuantity})
              </p>
              <Link to={`tours/${tour.id}`}>
                <button className={classes.btn}>Details</button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </ul>
  );
}

export default TourCard;

export async function loader({ request, params }) {
  const response = await fetch("http://127.0.0.1:8000/api/v1/tours");

  if (!response.ok) {
    return new Response("Could not fetch tours! Please try again", {
      statusCode: 404,
    });
  }

  // const res = new Response(response, { statusCode: 200 });
  return response;
}
