import Emitter from "eventemitter3";

export class EventEmitter extends Emitter {
  public source: string;

  constructor(source: string) {
    super();
    this.source = source;
  }
}

export const events = new EventEmitter("container");
