import { createStore } from "redux";
import QuoteReducer from "./Reducer/reducer";

export const store = createStore(QuoteReducer);
