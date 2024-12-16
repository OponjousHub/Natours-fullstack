import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Logo from "../img/logo-green.png";
import classes from "./rootLayout.module.css";
function RootLayout() {
  return (
    <>
      <Header />
      <div className={classes.mainLayout}>
        <Outlet />
      </div>
      <footer>
        <img src={Logo} alt="Footer logo" />
        <div>
          <div className={classes.footer_links}>
            <p> About us</p>
            <p>Download apps</p>
            <p>Become a guide</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <p className={classes.right_reserve}>
            © by Oponjous joe. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default RootLayout;
