import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.inputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          onChange={props.change}
          className={inputClasses.join(" ")}
          value={props.value}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props.elementConfig}
          onChange={props.change}
          className={inputClasses.join(" ")}
          value={props.value}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.change}
          className={inputClasses.join(" ")}
          value={props.value}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          onChange={props.change}
          className={inputClasses.join(" ")}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Input}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
