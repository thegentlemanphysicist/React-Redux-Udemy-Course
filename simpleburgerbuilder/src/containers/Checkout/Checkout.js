import React, { Component } from "react";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import * as actions from "../../store/actions";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component {
  state = {
    ingredients: null,
    totaltPrice: 0
  };
  componentDidMount() {
    this.props.onInitPurchase();
  }
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        // the + converts it to a number
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totaltPrice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    // console.log("The ingredients are:");
    // console.log(this.state.ingredients);
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return <div>{summary}</div>;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.orders.purchased
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitPurchase: () => dispatch(actions.purchaseInit)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
