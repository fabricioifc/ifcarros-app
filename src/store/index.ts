import { createStore, compose, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./ducks/rootReducer";
// import sagas from "./sagas";
import { CarState } from "./ducks/cars/types";
import rootSaga from "./ducks/rootSaga";

const middlewares = [];
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : compose(applyMiddleware(...middlewares));

export interface ApplicationState {
  cars: CarState;
}

const store: Store<ApplicationState> = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
