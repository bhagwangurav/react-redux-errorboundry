import { combineReducers } from "redux";

import { createStore } from "redux";
let initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      if (state < 1) {
        return state;
      }
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  changeTheNumber
});

const store = createStore(rootReducer);

export default store;
