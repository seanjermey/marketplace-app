import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// @ts-ignore
import { ActionEvent, ActionTypes } from "@types/action.types";
import { EventEmitter } from "@utils/events";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface Store {
  app: any;
  events: EventEmitter;
}

export const store = createStore(
  combineReducers({
    app: (state = {}, action: ActionEvent) => {
      switch (action.type) {
        default:
          return state;
      }
    },
    events: (state = null, action: ActionEvent) => {
      switch (action.type) {
        case ActionTypes.SET_EVENTS:
          return action.payload;

        default:
          return state;
      }
    },
  }),
  composeEnhancers(applyMiddleware(thunk))
);
