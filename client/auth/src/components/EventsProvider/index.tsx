import EventEmitter from "eventemitter3";
import React from "react";
import { PropsWithChildren, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from "@actions/mount.actions";
import { Spinner } from "@components/Spinner";
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
