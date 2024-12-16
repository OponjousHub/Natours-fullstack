import { Link } from "react-router-dom";
import classes from "./dropdawn.module.css";

export function DropDawn() {
  return (
    <>
      <ul className={classes.dropdawn_box}>
        <li>Create New Tour</li>
        <li>Edit Tour</li>
      </ul>
    </>
  );
}
export function userDropDawn() {
  return (
    <>
      <ul className={classes.dropdawn_box}>
        <Link to={"/"}>
          <li>Create New Tour</li>
        </Link>

        <li>
          <Link to={"/manage-tours"}>Edit Tour</Link>
        </li>
      </ul>
    </>
  );
}
