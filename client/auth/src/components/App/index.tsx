import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from "@components/Spinner";
import { Typography } from "@material-ui/core";

export const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/auth/login">
            <Typography variant={"h3"}>Login route</Typography>
          </Route>
          <Route path="/auth/logout">
            <Typography variant={"h3"}>Logout route</Typography>
          </Route>
          <Route path="/auth/register">
            <Typography variant={"h3"}>Register route</Typography>
          </Route>
          <Route path="/auth/reset">
            <Typography variant={"h3"}>Reset Password route</Typography>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
