import { Form, Link } from "react-router-dom";
import classes from "./loginPage.module.css";

function Signup() {
  return (
    <>
      <Form className={classes.form}>
        <h1>Create an account</h1>
        <div className={classes.data_box}>
          <label htmlFor="firstname ">First Name</label>
          <input id="firstname" type="text" name="firstname" />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="lastname ">Last Name</label>
          <input id="lastname" type="text" name="lastname" />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="email ">Email address</label>
          <input id="email" type="email" name="email" />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="passwod ">Password</label>
          <input
            id="passwod"
            type="password"
            name="passwod"
            minLength={8}
            placeholder="........"
          />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="passwod ">Confirm Password</label>
          <input
            id="passwod"
            type="password"
            name="passwod"
            minLength={8}
            placeholder="........"
          />
        </div>

        <p className={classes.control}>
          <Link to={"/"}>
            <button className={classes.cancel} type="button">
              Cancel
            </button>
          </Link>
          <button className={classes.login}>Sing up</button>
        </p>
      </Form>
    </>
  );
}

export default Signup;
