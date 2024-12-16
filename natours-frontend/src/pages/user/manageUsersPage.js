import { Link } from "react-router-dom";
import { Trash } from "@phosphor-icons/react";
import classes from "./manageUsersPage.module.css";
import img1 from "../../img/users/user-1.jpg";
import img2 from "../../img/users/user-2.jpg";
import img3 from "../../img/users/user-3.jpg";
import img4 from "../../img/users/user-4.jpg";
import img5 from "../../img/users/user-5.jpg";
import img6 from "../../img/users/user-6.jpg";

function ManageUsersPage() {
  return (
    <>
      <h1 className={classes.manage_users}>List of users</h1>
      <ul className={classes.users_container}>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img1} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4> Paul Onyeka</h4>
              <p>paulo@yahoo.com</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" />
            </p>
          </li>
        </Link>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img2} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4>Munaonye Okeke</h4>
              <p>muna@gmail.com</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" />
            </p>
          </li>
        </Link>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img3} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4>KENENNA Joseph</h4>
              <p>kenendiuwa@gmail.com</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" />
            </p>
          </li>
        </Link>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img4} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4>Wilson Kennedy</h4>
              <p>wilson peterson</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" />
            </p>
          </li>
        </Link>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img5} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4>Moses Babalola</h4>
              <p>mosbaba@natours.io</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" />
            </p>
          </li>
        </Link>
        <Link to={"edit"} className={classes.users_link}>
          <li className={classes.users_list}>
            <figure>
              <img src={img6} alt="Imag of" />
            </figure>
            <div className={classes.users_name}>
              <h4>Osunleye Medeyinlo</h4>
              <p>osumede@yahoo.com</p>
            </div>
            <p className={classes.delete}>
              <Trash size={25} color="#feb5b5" className={classes.icon} />
            </p>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default ManageUsersPage;
