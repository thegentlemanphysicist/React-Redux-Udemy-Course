import React, { Component } from "react";
import { connect } from "react-redux";
// import * as actionTypes from "../../store/actions/actionTypes";
import * as actions from "../../store/actions/index";
import Aux from "../../hoc/Aux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-orders";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  state = {
    //   // ingredients: null,
    //   // totalPrice: 4,
    //   // purchasable: false,
    purchasing: false
    // loading: false,
    // error: false
  };

  componentDidMount() {
    this.props.onInitIngredients();
  }
  // componentWillMount() {
  // axios
  //   .get("ingredients.json")
  //   .then(response => {
  //     this.setState({ ingredients: response.data });
  //   })
  //   .catch(error => {
  //     this.setState({ error: true });
  //   });
  // }
  purchaceHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaceCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaceContinueHandler = () => {
    // const queryParams = [];
    // for (let i in this.state.ingredients) {
    //   queryParams.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // queryParams.push("price=" + this.props.totPrice);
    // const queryString = queryParams.join("&");
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
    // this.props.history.push({
    //   pathname: "/checkout",
    //   search: "?" + queryString
    // });
  };

  updatePurchaseState = ingredients => {
    // const ingredients = {
    //   ...this.state.ingredients
    // };

    const sum = Object.keys(ingredients)
      .map(igKeys => {
        return ingredients[igKeys];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
    // this.setState({ purchasable: sum > 0 });
  };

  // addIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const newPrice = this.state.totalPrice + priceAddition;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  // removeIngredientHandler = type => {
  //   const oldCount = this.state.ingredients[type];
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1;

  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const newPrice = this.state.totalPrice - priceDeduction;
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  //   this.updatePurchaseState(updatedIngredients);
  // };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = !this.props.error ? (
      <Spinner />
    ) : (
      <p>Ingredients could not be loaded!</p>
    );

    if (this.props.ings) {
      burger = (
        <>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            price={this.props.totPrice}
            ingredientAdded={this.props.onAddIngredient}
            ingredientRemoved={this.props.onRemoveIngredient}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaceHandler}
          />
        </>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          totalPrice={this.props.totPrice}
          purchaseCancelled={this.purchaceCancelHandler}
          purchaseContinued={this.purchaceContinueHandler}
        />
      );
    }

    // if (this.state.loading) {
    //   orderSummary = <Spinner />;
    // }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaceCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    totPrice: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: ingName => dispatch(actions.addIngredient(ingName)),
    onRemoveIngredient: ingName => dispatch(actions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(actions.initIngredients()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
