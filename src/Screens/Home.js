import React from 'react';
import Header from '../Component/Layout/header/index';
import Footer from '../Component/Layout/Footer';
import Body from '../Component/Layout/Body';
import { Route, Switch } from 'react-router-dom';
import HomeStudent from '../Component/Layout/WorkSpace/HomeStudent'
import HomeTeacher from '../Component/Layout/WorkSpace/HomeTeacher'
import NotFound from '../Component/Layout/NotFound'

const Home = () => {
  return (
    <>
      <Switch>
        <Route path='/student-workspace'>
          <HomeStudent/>
        </Route>
        <Route  path='/teacher-workspace'>
          <HomeTeacher/>
        </Route>
        <Route path='/notfound'>
          <NotFound/>
        </Route>
        <Route path="/">
          <Header />
          <Body />
          <Footer />
        </Route>
      </Switch>
    </>
  );
};
export default Home;
