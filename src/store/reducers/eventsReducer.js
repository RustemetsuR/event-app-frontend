import { ADD_EVENT_FAILURE, ADD_EVENT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_SUCCESS, GET_EVENTS_FAILURE, GET_EVENTS_SUCCESS } from "../actionTypes";

const initialState = {
  events: null,
  error: null
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.value, error: null };
    case GET_EVENTS_FAILURE:
      return { ...state, error: action.error };
    case ADD_EVENT_SUCCESS:
      return { ...state, error: null };
    case ADD_EVENT_FAILURE:
      return { ...state, error: action.error };
    case DELETE_EVENT_SUCCESS:
      return { ...state, error: null };
    case DELETE_EVENT_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default eventsReducer;