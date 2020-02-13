import { createStore, combineReducers, applyMiddleware } from "redux";
import { all } from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import auth, { authSaga } from "redux/modules/auth";
import loading from "redux/modules/loading";
import write, { writeSaga } from "redux/modules/write";
import makers from "redux/modules/makers";

const rootReducer = combineReducers({
  auth,
  loading,
  write,
  makers
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
