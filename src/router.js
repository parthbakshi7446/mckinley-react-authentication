import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./components/Login/Login";
import HomeRoute  from "./components/homeRoute/index";
import history from "./utils/helpers/history";

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <HomeRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};
export default RouterComponent;