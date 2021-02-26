import EventEmitter from "eventemitter3";
import { Dispatch } from "react";

// @ts-ignore
import { ActionEvent, ActionTypes } from "@types/action.types";

export const setEvents = (payload: EventEmitter) => (
  dispatch: Dispatch<ActionEvent<EventEmitter>>
) => {
  dispatch({
    type: ActionTypes.SET_EVENTS,
    payload,
  });
};
