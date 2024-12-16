import { Link } from "react-router-dom";
import logo from "../img/logo-white.png";
import defUser from "../img/users/default.jpg";
import classes from "./header.module.css";
function Header() {
  return (
    <>
      <div className={classes.head}>
        <p className={classes.title}>
          <Link to="/">All Tours</Link>
        </p>
        <img src={logo} alt="Logo" className={classes.logo} />
        <nav>
          <p className={classes.login}>
            <Link to="login">Login</Link>
          </p>
          <Link to="signup" href="#" className={classes.signup}>
            Sign Up
          </Link>
          <Link to={"users"} className={classes.profile}>
            <img src={defUser} alt="" />
            <p>Johnas</p>
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
