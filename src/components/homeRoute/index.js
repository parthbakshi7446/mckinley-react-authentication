import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}  render={ props => localStorage.getItem("authToken")
      ?
      <>
        <Component {...props} />
      </>
      :
        <Redirect to={{pathname: "/login", state: { from: props.location } }} />
    }
  />
);
// HomeRoute.propTypes = {
//     component : PropTypes.func.isRequired,
//     rest: PropTypes.any,
// };
export default HomeRoute;
