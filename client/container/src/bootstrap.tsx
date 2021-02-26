import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";

import { App } from "@components/App";
import { EventsProvider } from "@components/EventsProvider";
import { ThemeProvider } from "@components/ThemeProvider";
import { events } from "@utils/events";
// @ts-ignore
import { store } from "@reducers/index";
import { theme } from "@utils/theme";

ReactDOM.render(
  <StoreProvider store={store}>
    <EventsProvider events={events}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </EventsProvider>
  </StoreProvider>,
  document.querySelector("#root")
);
