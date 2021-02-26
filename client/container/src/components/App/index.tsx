import React, { lazy, Suspense } from "react";
import Helmet from "react-helmet";
import { Box } from "@material-ui/core";

// @ts-ignore
import { EventTypes } from "@types/event.types";
import { useStyles } from "./styles";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { Sidebar } from "@components/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from "@components/Spinner";

const Auth = lazy(() => import("@apps/Auth"));
const Booking = lazy(() => import("@apps/Booking"));
const Dashboard = lazy(() => import("@apps/Dashboard"));
const Marketing = lazy(() => import("@apps/Marketing"));
const Support = lazy(() => import("@apps/Support"));

export const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Helmet>
        <style>{`body { margin: 0 }`}</style>
      </Helmet>
      <Sidebar />
      <Box className={classes.root}>
        <Header />
        <Box className={classes.main}>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/auth/login">
                <Auth />
              </Route>
              <Route path="/booking">
                <Booking />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/support">
                <Support />
              </Route>
              <Route path="/">
                <Marketing />
              </Route>
            </Switch>
          </Suspense>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};
