import { actionTypes } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_REDIRECT_RESPONSE_HEADERS:
      // debugger;
      return {
        ...state,
        redirectResponseHeaders: action.redirectResponseHeaders,
      };
    default:
      return state;
  }
};

export default reducer;
