import React from 'react';
import Login from './LoginBox/Login';
import Register from './LoginBox/Register';
import { Route, Switch } from 'react-router-dom';

const Body = () => {
  return (
    <>
      <Switch>
        <Route path="/News/login">
          <Login />
        </Route>
        <Route path="/News/register">
          <Register />
        </Route>
      </Switch>
    </>
  );
};
export default Body;
