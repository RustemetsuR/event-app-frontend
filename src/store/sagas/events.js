import { push } from "connected-react-router";
import { put } from "redux-saga/effects";
import axiosApi from "../../axiosApi";
import { addEventFailure, addEventSuccess, deleteEventFailure, deleteEventSuccess, getEventsFailure, getEventsSuccess } from "../actions/eventsActions";

export function* getEventsSaga(token) {
    try {
        const response = yield axiosApi.get("/events", {
            headers: {
                'Authorization': token.token,
            }
        });
        yield put(getEventsSuccess(response.data));
    } catch (e) {
        yield put(getEventsFailure(e));
    };
};

export function* addEventSaga(data, token) {
    try {
        yield axiosApi.post("/events", data.data, {
            headers: {
                'Authorization': data.token,
            }
        });

        yield put(addEventSuccess());
        yield put(push("/events"));
    } catch (e) {
        yield put(addEventFailure(e));
    };
};

export function* deleteEventSaga(token) {
    try {
        yield axiosApi.delete("/events/" + token.eventID, {
            headers: {
                'Authorization': token.token,
            }
        });

        yield put(deleteEventSuccess());
    } catch (e) {
        yield put(deleteEventFailure(e));
    };
};