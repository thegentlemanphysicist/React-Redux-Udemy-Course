import * as actionTypes from "../actions/actionsTypes";
import { updatedObject } from "../utility";

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updatedObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result
        })
      });

    //concat returns a new array object, unlike push which mutates the original result
    // return {
    //   ...state,
    //   results: state.results.concat({
    //     id: new Date(),
    //     value: action.result
    //   })
    // };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        result => result.id !== action.resultID
      );
      updatedObject(state, { results: updatedArray });
    // return {
    //   ...state,
    //   results: updatedArray
    // };
  }

  return state;
};

export default reducer;
