import React, { useRef, useEffect } from "react";

// @ts-ignore
import { mount } from "@support/App";
import { theme } from "@utils/theme";
import { events } from "@utils/events";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { events, theme });
  }, []);

  return <div ref={ref} />;
};
