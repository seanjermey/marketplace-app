import React, { useRef, useEffect } from "react";

// @ts-ignore
import { EventTypes } from "@types/event.types";
import { events } from "@utils/events";
// @ts-ignore
import { mount } from "@auth/App";
import { theme } from "@utils/theme";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { events, theme });
  }, []);

  return <div ref={ref} />;
};
