import { Form } from "react-router-dom";
import { Input, Select, TextArea } from "../utility/input";
import classes from "./createTourForm.module.css";

function CreateTourForm() {
  return (
    <>
      <Form className={classes.form} method="post">
        <h1>Create a tour</h1>
        <div className={classes.input_container}>
          <div className={classes.input_left}>
            <div className={classes.data_box}>
              <label htmlFor="id">Tour name</label>
              <input
                id="title"
                name="title"
                type="text"
                //   placeholder=""
                defaultValue="The Sea Explorer"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="select">Difficulty</label>
              <select name="difficulty" id="select">
                <option>Select </option>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="difficult">difficult</option>
              </select>
            </div>

            <div className={classes.data_box}>
              <label htmlFor="location">Location 1</label>

              <input
                id="location"
                name="location[]"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745,3.3379997, 1 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location3">Location 3</label>
              <input
                id="location3"
                name="location[]"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745,3.3379997, 3 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="area">Summary</label>
              <textarea
                id="area"
                name="tarea"
                row="5"
                col="30"
                placeholder="Write a brief summary"
              ></textarea>
            </div>
          </div>
          <div className={classes.input_right}>
            <div className={classes.data_box}>
              <label htmlFor="startsLoca">Start Location</label>
              <input
                id="startsLoca"
                name="startLocation"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745,3.3379997, 1 "
                placeholder="city country, longitude, latitude, address"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="date">Start Dates</label>
              <input
                id="date"
                name="date"
                type="text"
                defaultValue="2024/12/28, 2025/02/01, 2025/03/09"
                placeholder="YYYY/MM/DD, YYYY/MM/DD, YYYY/MM/DD..."
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location2">Location 2</label>
              <input
                id="location2"
                name="location[]"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745,3.3379997, 2 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location4">Location 4</label>
              <input
                id="location4"
                name="location[]"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745,3.3379997, 4 "
                placeholder="description, longitude, latitude, day"
                className="locat"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="area2">Description</label>
              <textarea
                id="area2"
                name="tarea2"
                row="5"
                col="30"
                placeholder="Describe the tour"
              ></textarea>
            </div>
          </div>
          <div className={classes.small_input}>
            <div className={classes.input_inner}>
              <div className={classes.data_box}>
                <label htmlFor="duration">Duration</label>
                <input id="duration" name="duration" type="text" />
              </div>
              <div className={classes.data_box}>
                <label htmlFor="price">Price</label>
                <input id="price" name="price" type="text" />
              </div>
              <div className={classes.data_box}>
                <label htmlFor="maxgroup">Max-group size</label>
                <input id="maxgroup" name="maxgroup" type="text" />
              </div>
            </div>
          </div>
          <div className={classes.img_control}>
            <p className={classes.choose}>
              <button type="file" name="myfile">
                Choose images
              </button>
              <span>No file selected</span>
            </p>
            <p className={classes.control}>
              <button className={classes.create}>Submit</button>
            </p>
          </div>
        </div>
      </Form>
      ;
    </>
  );
}
export default CreateTourForm;

export async function action({ request, params }) {
  const data = await request.formData();

  var fields = document.querySelectorAll("locat").value;
  console.log(fields);

  const enteredData = {
    title: data.get("title"),
    startLocation: data.get("startLocation"),
    startDates: data.get("date"),
    difficulty: data.get("difficulty"),
    location: data.get("[name='location']"),
    summary: data.get("tarea"),
    description: data.get("tarea2"),
    duration: data.get("duration"),
    price: data.get("price"),
    maxGroup: data.get("maxgroup"),
  };
  console.log(enteredData);
  return enteredData;
}
