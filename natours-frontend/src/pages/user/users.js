import { Link } from "react-router-dom";
import ChangePassword from "./changePassForm";
import classes from "./users.module.css";
import defUser from "../../img/users/default.jpg";

function Users() {
  return (
    <>
      <form className={classes.form}>
        <h1>Your account settings</h1>{" "}
        <p className={`${classes.name} ${classes.input}`}>
          <label htmlFor="name">name</label>
          <input id="name" type="text" name="myname" defaultValue={""} />
        </p>
        <p className={`${classes.email} ${classes.input}`}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" defaultValue={""} />
        </p>
        <p className={classes.photo}>
          <img src={defUser} alt="Logo" className={classes.logo} />
          <p>Choose a photo</p>
        </p>
        <p className={classes.cta_btn}>
          <button type="button">Save settings</button>
        </p>
      </form>
      <hr />
      <ChangePassword />
    </>
  );
}

export default Users;
