import React, { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";

import { EventEmitter } from "@utils/events";
import { Spinner } from "@components/Spinner";
// @ts-ignore
import { setEvents } from "@actions/mount.actions";
import { useEvents } from "@hooks/useEvents";

export const EventsProvider = ({
  events,
  children,
}: PropsWithChildren<{ events: EventEmitter }>) => {
  const hasEvents = !!useEvents();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEvents(events));
  }, [dispatch, events, setEvents]);

  return <React.Fragment>{!hasEvents ? <Spinner /> : children}</React.Fragment>;
};
