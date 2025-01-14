import { Form, Link, useActionData } from "react-router-dom";
import classes from "./loginPage.module.css";

function Signup() {
  const data = useActionData;
  // if (data) console.log(data);
  return (
    <>
      <Form className={classes.form} method="post">
        <h1>Create an account</h1>
        <div className={classes.data_box}>
          <label htmlFor="firstname ">Full Name</label>
          <input
            id="firstname"
            type="text"
            name="fullName"
            placeholder="Firstname Lastname"
          />
        </div>
        {/* <div className={classes.data_box}>
          <label htmlFor="lastname ">Last Name</label>
          <input id="lastname" type="text" name="lastname" />
        </div> */}
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
          <label htmlFor="passwodCon ">Confirm Password</label>
          <input
            id="passwodCon"
            type="password"
            name="passwodCon"
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

export async function action({ request, params }) {
  const data = await request.formData();

  const signupData = {
    name: data.get("fullName"),
    email: data.get("email"),
    password: data.get("passwod"),
    passwordConfirm: data.get("passwodCon"),
  };
  console.log(signupData);

  const response = await fetch("https://127.0.0.1:8000/api/v1/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      body: JSON.stringify(signupData),
    },
  });
  console.log(response);

  if (!response.ok) {
    const res = new Response("We could not sign you up now! Please try again", {
      statusCode: 501,
    });
    return res;
  } else {
    return new Response(response, { statusCode: 201 });
  }
}
