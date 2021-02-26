import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEvents } from "@hooks/useEvents";
import { config } from "@utils/config";

// @ts-ignore
import { EventTypes } from "@types/event.types";

export const Header = () => {
  const events = useEvents();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => events.emit(EventTypes.TOGGLE_SIDEBAR)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{config.appName}</Typography>
        <Box display={"flex"} justifyContent={"right"} marginLeft={"auto"}>
          <Button component={Link} color="inherit" to="/">
            Home
          </Button>
          <Button component={Link} color="inherit" to={"/dashboard"}>
            Dashboard
          </Button>
          <Button component={Link} color="inherit" to={"/booking"}>
            Booking
          </Button>
          <Button component={Link} color="inherit" to={"/support"}>
            Support
          </Button>
          <Button component={Link} color="inherit" to={"/auth"}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
