import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("ordersummary will update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      igKeys => {
        return (
          <li key={igKeys}>
            <span style={{ textTransform: "capitalize" }}>{igKeys}</span> :{" "}
            {this.props.ingredients[igKeys]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total price is {this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue To Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
