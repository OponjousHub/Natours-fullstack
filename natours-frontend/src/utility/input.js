import { forwardRef } from "react";
import classes from "./input.module.css";
import { use } from "react";

const Input = forwardRef(function Input({ label, id, type, name }, ref) {
  return (
    <>
      <div className={classes.data_box}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          id={id}
          type={type}
          name={name}
          placeholder="........"
        />
      </div>
    </>
  );
});
export default Input;

export function TextArea({ label, id, tarea, row, col, placeholder }) {
  return (
    <>
      <div className={classes.data_box}>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={tarea}
          rows={row}
          cols={col}
          defaultValue={placeholder}
        ></textarea>
      </div>
    </>
  );
}
export function Select({ label, id, type, name, placeholder, ...props }) {
  return (
    <>
      <div className={classes.data_box}>
        <label htmlFor={id}>{label}</label>
        <select name={name} id={id}>
          <option>Select </option>
          <option value={props.easy}>easy</option>
          <option value={props.medium}>medium</option>
          <option value={props.difficult}>difficult</option>
        </select>
      </div>
    </>
  );
}
