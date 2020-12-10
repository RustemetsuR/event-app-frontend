import {applyMiddleware, combineReducers, createStore} from "redux";
import {createBrowserHistory} from "history";
import usersReducer from "./reducers/usersReducer";
import eventsReducer from "./reducers/eventsReducer";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";


export const history = createBrowserHistory();

const rootReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  router: connectRouter(history)
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history),
  sagaMiddleware
];

const enhancers = applyMiddleware(...middleware);

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  saveToLocalStorage({
    users: {
      user: store.getState().users.user
    }
  });
});

export default store;