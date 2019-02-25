import React, { Component } from "react";
import Order from "../../components/Order/Order";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions";
import order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
class Orders extends Component {
  // state = {
  //   orders: [],
  //   loadind: true
  // };
  componentDidMount() {
    this.props.onFetchOrders();
    // axios
    //   .get("orders.json")
    //   .then(res => {
    //     console.log(res.data);
    //     const fetchOrders = [];
    //     for (let key in res.data) {
    //       fetchOrders.push({
    //         ...res.data[key],
    //         id: key
    //       });
    //     }
    //     this.setState({ loadind: false, orders: fetchOrders });
    //   })
    //   .catch(err => {
    //     this.setState({ loadind: false });
    //   });
  }
  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
