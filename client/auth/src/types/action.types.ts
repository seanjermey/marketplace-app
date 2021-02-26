export interface ActionEvent<P = any> {
  type: ActionTypes;
  payload: P;
}

export enum ActionTypes {
  SET_EVENTS = "SET_EVENTS",
}
