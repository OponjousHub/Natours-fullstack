import { Form, Link } from "react-router-dom";
import { useRef } from "react";
import classes from "./loginPage.module.css";

function Login() {
  const emailRef = useRef();
  const passRef = useRef();
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>LOG into your account</h1>
        <div className={classes.data_box}>
          <label htmlFor="email ">Email address</label>
          <input id="email" ref={emailRef} type="email" name="email" />
        </div>
        <div className={classes.data_box}>
          <label htmlFor="passwod ">Password</label>
          <input
            ref={passRef}
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
          <button className={classes.login}>Login</button>
        </p>
      </Form>
    </>
  );
}
export default Login;

export async function action({ request, params }) {
  const data = request.formData();
  console.log(data);
}
