import classes from "./users.module.css";

function ChangePassword() {
  return (
    <>
      <form className={`${classes.form} ${classes.pass_margin}`}>
        <h1>Change Your Password</h1>
        <p className={`${classes.name} ${classes.input}`}>
          <label htmlFor="password">Current Password</label>
          <input
            id="password"
            type="password"
            placeholder="........"
            name="password"
          />
        </p>
        <p className={`${classes.email} ${classes.input}`}>
          <label htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            placeholder="........"
            minLength={8}
            name="newPassword"
          />
        </p>
        <p className={`${classes.email} ${classes.input}`}>
          <label htmlFor="conPassword">Confirm Password</label>
          <input
            id="conPassword"
            type="password"
            placeholder="........"
            name="conPassword"
          />
        </p>
        <p className={classes.cta_btn}>
          <button type="button">Save settings</button>
        </p>
      </form>
    </>
  );
}
export default ChangePassword;
