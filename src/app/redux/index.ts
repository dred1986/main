import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware: any = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
