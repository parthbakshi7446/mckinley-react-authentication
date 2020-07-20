import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./pages/login/login";
import { HomeRoute } from "./components/HomeRoute";

const RouterComponent = () => {
  return (
    <Router >
      <Switch>
        <HomeRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};
export default RouterComponent;