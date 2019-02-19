import * as actionTypes from "../actions/actionsTypes";
import { updatedObject } from "../utility";
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updatedObject(state, { counter: state.counter + 1 });

    // const newState = Object.assign({}, state);
    // newState.counter = state.counter + 1;
    // return newState;
    case actionTypes.DECREMENT:
      return updatedObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updatedObject(state, { counter: state.counter + action.value });
    case actionTypes.SUBTRACT:
      return updatedObject(state, { counter: state.counter - action.value });
  }

  return state;
};

export default reducer;
