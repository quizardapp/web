import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./reducer";
import initialState from "./state";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, initialState, applyMiddleware(saga, logger));

export default store;
