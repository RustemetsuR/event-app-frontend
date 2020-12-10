import {takeEvery} from "redux-saga/effects";
import {facebookLoginSaga, loginUserSaga, logoutUserSaga, registerUserSaga} from "./users";
import {ADD_EVENT, DELETE_EVENT, FACEBOOK_LOGIN, GET_EVENTS, LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../actionTypes";
import { addEventSaga, deleteEventSaga, getEventsSaga } from "./events";

export function* rootSaga() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
  yield takeEvery(LOGIN_USER, loginUserSaga);
  yield takeEvery(LOGOUT_USER, logoutUserSaga);
  yield takeEvery(FACEBOOK_LOGIN, facebookLoginSaga);
  yield takeEvery(GET_EVENTS, getEventsSaga);
  yield takeEvery(ADD_EVENT, addEventSaga);
  yield takeEvery(DELETE_EVENT, deleteEventSaga);
}