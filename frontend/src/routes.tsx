import React, { useEffect } from "react";
import { Switch, Route, Router } from "react-router-dom";

import history from "~/services/history";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";

export default function Routes() {
  const storageOng = localStorage.getItem("ong");

  useEffect(() => {}, [storageOng]);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />

        <Route path="/home" component={Home} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/newCase" component={NewIncident} isPrivate />
      </Switch>
    </Router>
  );
}
