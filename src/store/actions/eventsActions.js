import { ADD_EVENT, ADD_EVENT_FAILURE, ADD_EVENT_SUCCESS, DELETE_EVENT, DELETE_EVENT_FAILURE, DELETE_EVENT_SUCCESS, GET_EVENTS, GET_EVENTS_FAILURE, GET_EVENTS_SUCCESS } from "../actionTypes";

export const getEvents = token => {
    return { type: GET_EVENTS, token };
};
export const getEventsSuccess = value => {
    return { type: GET_EVENTS_SUCCESS, value };
};
export const getEventsFailure = error => {
    return { type: GET_EVENTS_FAILURE, error };
};
export const addEvent = (data, token) => {
    return { type: ADD_EVENT, data, token };
};
export const addEventSuccess = () => {
    return { type: ADD_EVENT_SUCCESS };
};
export const addEventFailure = error => {
    return { type: ADD_EVENT_FAILURE, error };
};
export const deleteEvent = (token,eventID) =>{
    return {type: DELETE_EVENT, token, eventID};
};
export const deleteEventSuccess = () =>{
    return {type: DELETE_EVENT_SUCCESS};
};
export const deleteEventFailure = error =>{
    return {type: DELETE_EVENT_FAILURE, error};
};

