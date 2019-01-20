import React, { Component } from "react";
import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKeys => {
    return (
      <li key={igKeys}>
        <span style={{ textTransform: "capitalize" }}>{igKeys}</span> :{" "}
        {props.ingredients[igKeys]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue To Checkout?</p>
      <button>Go!</button>
    </Aux>
  );
};

export default orderSummary;
