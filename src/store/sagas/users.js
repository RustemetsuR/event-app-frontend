import {push} from "connected-react-router";
import {put} from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import {
  loginUserFailure,
  loginUserSuccess,
  logoutUser,
  registerUserFailure,
  registerUserSuccess
} from "../actions/usersActions";

export function* registerUserSaga({userData}) {
  try {
    yield axiosApi.post("/users", userData);
    yield put(registerUserSuccess());
    yield put(push("/login"));
  } catch(e) {
    if (e.response && e.response.data) {
      yield put(registerUserFailure(e.response.data));
    } else {
      yield put(registerUserFailure({global: "No internet"}));
    }
  }
}
export function* loginUserSaga({userData}) {
  try {
    const response = yield axiosApi.post("/users/sessions", userData);
    yield put(loginUserSuccess(response.data));
    yield put(push("/events"));
  } catch(e) {
    yield put(loginUserFailure(e.response.data));
  }
}
export function* logoutUserSaga() {
  yield axiosApi.delete("/users/sessions");
  yield put(logoutUser());
  // yield put(push("/login"));
}
export function* facebookLoginSaga({data}) {
  try {
    const response = yield axiosApi.post("/users/facebookLogin", data);
    yield put(loginUserSuccess(response.data));
    yield put(push("/events"));
  } catch(e) {
    yield put(loginUserFailure(e.response.data));
  }
}