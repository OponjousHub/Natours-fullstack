import { Form, redirect, useActionData } from "react-router-dom";
// import { Input, Select, TextArea } from "../utility/input";
import classes from "./createTourForm.module.css";

function CreateTourForm() {
  const data = useActionData();
  // if (data.isError) {
  //   return data.message;
  // }

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
                name="location1"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745, 3.3379997, 1 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location3">Location 3</label>
              <input
                id="location3"
                name="location3"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745, 3.3379997, 3 "
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
                defaultValue="Breathtaking hike through the Canadian Banff National Park"
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
                defaultValue="Lagos Nigeria, 6.5960745, 3.3379997 "
                placeholder="city country, longitude, latitude"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="startAddres">Start Location Address</label>
              <input
                id="startAddres"
                name="startLocationAdd"
                type="text"
                defaultValue="224 Banff Ave, Banff, AB, Canada"
                placeholder="start location address"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="date">Start Dates</label>
              <input
                id="date"
                name="date"
                type="text"
                defaultValue="2025/1/28, 2025/02/01, 2025/03/09"
                placeholder="YYYY/MM/DD, YYYY/MM/DD, YYYY/MM/DD..."
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location2">Location 2</label>
              <input
                id="location2"
                // className="locations"
                name="location2"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745, 3.3379997, 2 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="location4">Location 4</label>
              <input
                id="location4"
                name="location4"
                type="text"
                defaultValue="Lagos Nigeria, 6.5960745, 3.3379997, 4 "
                placeholder="description, longitude, latitude, day"
              />
            </div>
            <div className={classes.data_box}>
              <label htmlFor="area2">Description</label>
              <textarea
                id="area2"
                name="tarea2"
                row="5"
                col="30"
                defaultValue="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
              {/* {data && data.isError && <p>{data.message}</p>} */}
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

  const startDates = [data.get("date").split(", ")];
  const descrptionCoord = [data.get("startLocation").split(", ")];
  const startLocation = {
    type: "point",
    address: data.get("startLocationAdd"),
    description: descrptionCoord[0][0],
    coordinates: [descrptionCoord[0][1] * 1, descrptionCoord[0][2] * 1],
  };

  const locat1 = data.get("location1").split(", ");
  const locat2 = data.get("location2").split(", ");
  const locat3 = data.get("location3").split(", ");
  const locat4 = data.get("location4").split(", ");

  let location;

  if (locat4.length > 1) {
    location = [
      {
        description: locat1[0],
        type: "point",
        coordinates: [locat1[1] * 1, locat1[2] * 1],
        day: locat1[3] * 1,
      },
      {
        description: locat2[0],
        type: "point",
        coordinates: [locat2[1] * 1, locat2[2] * 1],
        day: locat2[3] * 1,
      },
      {
        description: locat3[0],
        type: "point",
        coordinates: [locat3[1] * 1, locat3[2] * 1],
        day: locat3[3] * 1,
      },

      {
        description: locat4[0],
        type: "point",
        coordinates: [locat4[1] * 1, locat4[2] * 1],
        day: locat4[3] * 1,
      },
    ];
  } else {
    location = [
      {
        description: locat1[0],
        type: "point",
        coordinates: [locat1[1] * 1, locat1[2] * 1],
        day: locat1[3] * 1,
      },
      {
        description: locat2[0],
        type: "point",
        coordinates: [locat2[1] * 1, locat2[2] * 1],
        day: locat2[3] * 1,
      },
      {
        description: locat3[0],
        type: "point",
        coordinates: [locat3[1] * 1, locat3[2] * 1],
        day: locat3[3] * 1,
      },
    ];
  }

  const enteredData = {
    name: data.get("title"),
    startLocation: startLocation,
    startDates: startDates,
    difficulty: data.get("difficulty"),
    location: location,
    summary: data.get("tarea"),
    description: data.get("tarea2"),
    duration: data.get("duration") * 1,
    price: data.get("price") * 1,
    maxGroupSize: data.get("maxgroup") * 1,
  };
  console.log(enteredData);

  const response = await fetch("http://127.0.0.1:8000/api/v1/tours", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(enteredData),
  });

  if (!response.ok) {
    return {
      isError: true,
      message: "Could not create tour! Please try again later.",
    };
  } else {
    const res = new Response(response, { statusCode: 201 });
    return res;
  }

  return redirect("/");
}
