import { applyMiddleware, createStore } from "redux";
import reducers from './reducers';
import middleware from './middleware';
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = (services) => createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware.map(f => f(services))))
);