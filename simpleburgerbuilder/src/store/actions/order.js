import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
import order from "../../components/Order/Order";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  };
};

export const purchaseBurgerFail = error => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  };
};

export const purchaseBurger = orderData => {
  return dispatch => {
    dispatch(purchaseBurgerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        // this.setState({ loading: false });
        // this.props.history.push("/");
        // console.log(response);
      })
      .catch(error => {
        dispatch(purchaseBurgerFail(error));
      });
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersFail = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    orders: error
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("orders.json")
      .then(res => {
        console.log(res.data);
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchOrders));
        // this.setState({ loadind: false, orders: fetchOrders });
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err));
        // this.setState({ loadind: false });
      });
  };
};
