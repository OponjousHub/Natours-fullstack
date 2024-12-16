import { User, ShoppingBagOpen, Star, CreditCard } from "@phosphor-icons/react";
import { NavLink, Outlet } from "react-router-dom";
import Profile from "../../img/users/user-15.jpg";
import classes from "./editUser.module.css";

function EditUser() {
  return (
    <>
      <h1 className={classes.userhead}>Manage User</h1>
      <div className={classes.user_container}>
        <ul className={classes.menu}>
          <NavLink
            to={""}
            className={(isActive) => (isActive ? classes.active : " ")}
            end
          >
            <p className={`${classes.menu_item} ${classes.menu_link}`}>
              <User size={22} color="#555" />
              <li>
                <span>About User</span>
              </li>
            </p>
          </NavLink>
          <NavLink
            to={"booking"}
            // className={(isActive) => (isActive ? classes.active : " ")}
          >
            <p className={`${classes.menu_item} ${classes.menu_link}`}>
              <ShoppingBagOpen size={22} color="#555" />
              <li>
                <span>Bookings</span>
              </li>
            </p>
          </NavLink>
          <NavLink
            to={"review"}
            className={(isActive) => (isActive ? classes.active : " ")}
          >
            <p className={`${classes.menu_item} ${classes.menu_link}`}>
              <Star size={22} color="#555" />
              <li>
                <span>Reviews</span>
              </li>
            </p>
          </NavLink>
          <NavLink
            to={"delivered"}
            className={(isActive) => (isActive ? classes.active : " ")}
          >
            <p className={`${classes.menu_item} ${classes.menu_link}`}>
              <CreditCard size={22} color="#555" />
              <li>
                <span>Delivered</span>
              </li>
            </p>
          </NavLink>
        </ul>
        <aside className={classes.aside}>
          <figure className={classes.profile_photo}>
            <img src={Profile} alt="poto of" />
          </figure>
          <h2>Paul Peterson</h2>
        </aside>
        <main className={classes.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
export default EditUser;
