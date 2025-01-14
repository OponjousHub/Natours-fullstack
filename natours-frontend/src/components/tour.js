import {
  CalendarBlank,
  Users,
  Star,
  TrendUp,
  Clock,
  MapPin,
} from "@phosphor-icons/react";
import { Link, useLoaderData } from "react-router-dom";
import TourImg from "../img/tours/tour-2-cover.jpg";
import TourImg1 from "../img/tours/tour-4-cover.jpg";
import TourImg2 from "../img/tours/tour-5-cover.jpg";
import TourImg3 from "../img/tours/tour-6-cover.jpg";
import User1 from "../img/users/user-3.jpg";
import User2 from "../img/users/user-4.jpg";
import User3 from "../img/users/user-5.jpg";
import logo from "../img/logo-white.png";
import classes from "./tour.module.css";

function Tour() {
  const data = useLoaderData();
  const tour = data.data.tour;
  console.log(data);
  return (
    <>
      <div className={classes.cover_img_box}>
        <div
          style={{
            backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
            backgroundSize: "cover",
          }}
          className={classes.cover_img}
        >
          <div className={classes.title_position}>
            <h3 className={classes.tour_title_box}>
              <span className={classes.tour_title}>{tour.name}</span>
            </h3>
            <div className={classes.tour_describe_box}>
              <div className={classes.describe_days}>
                <Clock size={25} color="#fff" />
                <p>{tour.duration} Days</p>
              </div>
              <div className={classes.describe_place}>
                <MapPin size={25} color="#fff" />
                <p>{tour.startLocation.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={classes.section}>
        <div className={classes.left}>
          <div className={classes.fact_section}>
            <h2>Quick facts</h2>
            <div className={classes.facts}>
              <CalendarBlank size={25} color="#2399ca" />
              <p className={classes.fact}>next date</p>
              <p>{tour.startDates[0]}</p>
            </div>
            <div className={classes.facts}>
              <TrendUp size={32} color="#2399ca" />
              <p className={classes.fact}>difficulty</p>
              <p>{tour.difficulty}</p>
            </div>
            <div className={classes.facts}>
              <Users size={25} color="#2399ca" />
              <p className={classes.fact}>Participants</p>
              <p>{`${tour.maxGroupSize} people`} </p>
            </div>
            <div className={classes.facts}>
              <Star size={25} color="#2399ca" />
              <p className={classes.fact}>Rating</p>
              <p>{`${tour.ratingAverage} / ${tour.ratingQuantity}`}</p>
            </div>
          </div>
          <div className={classes.guide_section}>
            <h2>Your tour guides</h2>
            <div className={classes.guides}>
              <img src={User2} alt="" className={classes.guide_photo} />
              <p className={classes.leadguide}>LEAD-GUIDE</p>
              <p>Miyah Myles</p>
            </div>
            <div className={classes.guides}>
              <img src={User1} alt="" className={classes.guide_photo} />
              <p className={classes.leadguide}>Tour-Guide</p>
              <p>Jennifer Hardy</p>
            </div>
          </div>
        </div>
        <div className={classes.about}>
          <h2>{`About ${tour.name}`}</h2>
          <p>{tour.description}</p>
        </div>
      </section>
      <section className={classes.section_photos}>
        <div>
          <img
            src={TourImg1}
            alt="A Tour pic"
            className={`${classes.picture_box__img1} ${classes.picture_box__img}`}
          />
        </div>
        <div>
          <img
            src={TourImg2}
            alt="A Tour pic"
            className={`${classes.picture_box__img2} ${classes.picture_box__img}`}
          />
        </div>
        <div>
          <img
            src={TourImg3}
            alt="A Tour pic"
            className={`${classes.picture_box__img3} ${classes.picture_box__img}`}
          />
        </div>
      </section>
      <section className={classes.section_map}>
        <div className={classes.map}></div>
      </section>
      <section className={classes.section_reviews}>
        <div className={classes.review_container}>
          <ul className={classes.review_ul}>
            <li className={classes.review_list}>
              <div className={classes.review}>
                <div className={classes.review_owner}>
                  <img src={User3} alt="Pic of the review owner" />
                  <p>Oponjous Joe</p>
                </div>
                <p className={classes.review_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos sint quo commodi corrupti accusantium
                  veniam saepe numquam.
                </p>
              </div>
            </li>
            <li className={classes.review_list}>
              <div className={classes.review}>
                <div className={classes.review_owner}>
                  <img src={User3} alt="Pic of the review owner" />
                  <p>Oponjous Joe</p>
                </div>
                <p className={classes.review_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos sint quo commodi corrupti accusantium
                  veniam saepe numquam.
                </p>
              </div>
            </li>
            <li className={classes.review_list}>
              <div className={classes.review}>
                <div className={classes.review_owner}>
                  <img src={User3} alt="Pic of the review owner" />
                  <p>Oponjous Joe</p>
                </div>
                <p className={classes.review_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos sint quo commodi corrupti accusantium
                  veniam saepe numquam.
                </p>
              </div>
            </li>
            <li className={classes.review_list}>
              <div className={classes.review}>
                <div className={classes.review_owner}>
                  <img src={User3} alt="Pic of the review owner" />
                  <p>Oponjous Joe</p>
                </div>
                <p className={classes.review_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos sint quo commodi corrupti accusantium
                  veniam saepe numquam.
                </p>
              </div>
            </li>
            <li className={classes.review_list}>
              <div className={classes.review}>
                <div className={classes.review_owner}>
                  <img src={User3} alt="Pic of the review owner" />
                  <p>Oponjous Joe</p>
                </div>
                <p className={classes.review_text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque dignissimos sint quo commodi corrupti accusantium
                  veniam saepe numquam.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={classes.section_cta}>
        <div className={classes.logo_images}>
          <p className={classes.cta_logo}>
            <img src={logo} alt="Small logo at the cta section" />
          </p>
          <img
            src={TourImg1}
            alt="Rounded tour pic at the cta section"
            className={`${classes.cta_photo} ${classes.cta_photo1}`}
          />
          <img
            src={TourImg3}
            alt="Rounded tour pic at the cta section"
            className={classes.cta_photo}
          />
        </div>
        <div className={classes.cta_text}>
          <h2>What are you waiting for?</h2>
          <p>
            {tour.duration} days. 1 adventure. Infinite memories. Make it yours
            today!
          </p>
        </div>
        <Link to={"/"} className={classes.cta_btn}>
          <button type="button">Log in to book tour!</button>
        </Link>
      </section>
    </>
  );
}

export default Tour;

export async function loader({ request, params }) {
  console.log(params.tourId);
  const id = params.tourId;
  const response = await fetch(`http://127.0.0.1:8000/api/v1/tours/${id}`);

  if (!response.ok) {
    return new Response("Could not fetch the requested tour!", {
      statusCode: 422,
    });
  }

  return response;
}
