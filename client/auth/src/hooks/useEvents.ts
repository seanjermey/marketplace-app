import { useSelector } from "react-redux";
import { Store } from "@reducers/index";

export const useEvents = () => useSelector((state: Store) => state.events);
