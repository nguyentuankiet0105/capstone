import React from 'react';
import Login from './LoginBox/Login';
import Register from './register/Register';
import { Route, Switch } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
export default Body;
