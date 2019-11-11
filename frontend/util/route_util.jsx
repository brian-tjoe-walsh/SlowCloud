import React from "react";
import { Route } from 'react-router-dom';
import {Redirect } from 'react-router';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id) };
};

// const f = function(props) {
//   if (!loggedIn) {
//     return <Component {...props} />
//   } else {
//     return <Redirect to="/login" />
//   }
// }
const Auth = ({component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? (<Component {...props} />) : (<Redirect to="/discover" />)

    }
  />
);

export const AuthRoute = withRouter(
  connect(
    mapStateToProps, null)(Auth));


const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route 
    path={path} 
    exact={exact} 
    render={(props) => 
      loggedIn ? (<Component {...props} />) : ( <Redirect to="/login" /> )
  } />
);



export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps, null)(Protected));
