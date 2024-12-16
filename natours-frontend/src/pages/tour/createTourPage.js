import { useLoaderData, useActionData } from "react-router-dom";
import CreateTourForm from "../../components/createTourForm";
import classes from "./createTourPage.module.css";

function CreateTourPage() {
  const enteredData = useActionData();
  console.log(enteredData);
  return <CreateTourForm />;
}

export default CreateTourPage;
