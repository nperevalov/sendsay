import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import Sendsay from "sendsay-api";
import { API_KEY } from "../constants/ApiKey"; // делать так плохая идея, но ключ только с правами на тестовую рассылку

const middlewares = [
  thunk.withExtraArgument(
    new Sendsay({
      apiKey: API_KEY
    })
  )
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares))
);
