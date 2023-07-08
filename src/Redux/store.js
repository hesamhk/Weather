import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { weatherReducer } from "./reducer";
const middleWare = [thunk];
const reducers = combineReducers({
  weather: weatherReducer,
});
const initialState = {};
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;
