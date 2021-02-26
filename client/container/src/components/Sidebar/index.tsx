import React, { useEffect, useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// @ts-ignore
import { EventTypes } from "@types/event.types";
import { useEvents } from "@hooks/useEvents";

export const Sidebar = () => {
  const events = useEvents();
  const [open, setOpen] = useState(true);

  events.on(EventTypes.OPEN_SIDEBAR, () => setOpen(true));
  events.on(EventTypes.CLOSE_SIDEBAR, () => setOpen(false));
  events.on(EventTypes.TOGGLE_SIDEBAR, () => setOpen(!open));

  useEffect(() => {
    events.emit(open ? EventTypes.SIDEBAR_OPENED : EventTypes.SIDEBAR_CLOSED);
  }, [open]);

  return (
    <div>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div role="presentation">
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};
