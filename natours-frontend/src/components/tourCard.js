import { MapPin, Flag, CalendarBlank, Users } from "@phosphor-icons/react";
import TourImg from "../img/tours/tour-2-cover.jpg";
import classes from "./tourCard.module.css";
import { Link } from "react-router-dom";

function TourCard() {
  return (
    <>
      <div className={classes.article_box}>
        <article className={classes.tour_box}>
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
            }}
            className={classes.tour_img}
          >
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div className={classes.bottom_card}></div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <Link to={"tours/tourId"}>
                <button className={classes.btn}>Details</button>
              </Link>
            </div>
          </div>
        </article>

        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
        <article className={classes.tour_box}>
          {/* <img src={TourImg} alt="Tour image" className={classes.tour_img} /> */}
          <div
            style={{
              backgroundImage: `linear-gradient( to right bottom, rgba(31, 135, 176, 0.574),rgba(44, 190, 252, 0.581)), url(${TourImg})`,
              backgroundSize: "cover",
              // backgroundImage:
              //   "linear-gradient( to right bottom, rgba(0, 128, 0, 0.16),rgba(255, 0, 0, 0.17))",
            }}
            className={classes.tour_img}
          >
            {/* <img src={TourImg} /> */}
            <h3 className={classes.tour_title}>
              <span>The Sea Explorer</span>
            </h3>
          </div>
          <div>
            <div className={classes.tour_text_box}>
              <p className={classes.duration}>Medium 7-day Tour</p>
              <p className={classes.descrip}>
                Exploring the jaw-dropping US east coast by foot and by boat
              </p>
            </div>
            <div className={classes.tour_info_box}>
              <div className={classes.tour_info}>
                <MapPin size={25} color="#2399ca" />
                <p>Miami, USA</p>
              </div>
              <div className={classes.tour_info}>
                <CalendarBlank size={25} color="#2399ca" />
                <p>June 2021</p>
              </div>
              <div className={classes.tour_info}>
                <Flag size={25} color="#2399ca" />
                <p>4 stops</p>
              </div>
              <div className={classes.tour_info}>
                <Users size={25} color="#2399ca" />
                <p>15 people</p>
              </div>
            </div>
          </div>
          <div className={classes.tour_cad_bottom}>
            <p className={classes.per_person}>
              <span>$497</span> per person
            </p>
            <div className={classes.btn_rating}>
              <p>
                <span>4 </span>rating (1)
              </p>
              <a href="#">
                <button className={classes.btn}>Details</button>
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default TourCard;
