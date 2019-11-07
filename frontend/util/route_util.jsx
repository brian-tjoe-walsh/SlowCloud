import React from "react";
import { Route } from 'react-router-dom';
import {Redirect } from 'react-router';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.id) };
};

const Auth = ({component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={props =>
      loggedIn ? (<Redirect to="/discover" />) : (<Component {...props} />)
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
