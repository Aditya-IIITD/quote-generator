import { IS_SUCCESS, IS_ERROR, IS_LOADING } from "../Actions/quoteAction";

const INITIAL_STATE = {
  Loading: false,
  quote: {},
  err: null,
};

function QuoteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        Loading: true,
      };
    case IS_SUCCESS:
      return {
        ...state,
        Loading: false,
        quote: { ...action.quote },
        err: null,
      };
    case IS_ERROR:
      return { ...state, Loading: false, err: action.error };
    default:
      return state;
  }
}

export default QuoteReducer;
