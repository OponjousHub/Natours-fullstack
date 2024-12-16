import classes from "./aboutUser.module.css";
function AboutUser() {
  return (
    <>
      <div className={classes.about_container}>
        <div className={classes.data}>
          <label>Email</label>
          <p>Josep@yahoo.com</p>
        </div>
        <div className={classes.data}>
          <label>Sex</label>
          <p>Male</p>
        </div>
        <div className={classes.data}>
          <label>address</label>
          <p>Plot 54C, Malven Avenue, Los Angelis</p>
        </div>
        {/* <div className={classes.sex}>
          <label>Sex</label>
          <p>Mail</p>
        </div> */}
      </div>
    </>
  );
}
export default AboutUser;
