import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import Sendsay from "sendsay-api";

const middlewares = [thunk.withExtraArgument(Sendsay)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
);
