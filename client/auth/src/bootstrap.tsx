import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { Theme } from "@material-ui/core";

import { App } from "@components/App";
import { EventEmitter, events } from "@utils/events";
// @ts-ignore
import { EventTypes } from "@types/event.types";
import { EventsProvider } from "@components/EventsProvider";
import { ThemeProvider } from "@components/ThemeProvider";
import { store } from "@reducers/index";

export interface MountProps {
  events: EventEmitter;
  theme?: Theme;
}

const mount = (el: Element, props: MountProps) => {
  return new Promise((resolve) => {
    ReactDOM.render(
      <StoreProvider store={store}>
        <EventsProvider events={props.events}>
          <ThemeProvider containerTheme={props.theme}>
            <App />
          </ThemeProvider>
        </EventsProvider>
      </StoreProvider>,
      el,
      () => setTimeout(() => resolve(), 500)
    );
  });
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");
  if (devRoot) {
    mount(devRoot, { events });
  }
}

export { mount };
