import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from './WorkSpace_Sub/Calendar';
import HeaderWS from '../WorkSpace/WorkSpace_Sub/HeaderWS'
import {Switch, Route} from 'react-router-dom'
import Chatroom from '../Chatroom/index'

const HomeStudent = () => {
  return (
    <>
      <div className="homestudent">
        <div className="container">
          <HeaderWS/>
          <Sidebar />
          <Switch>
            <Route path="/student-workspace/home">
              <Calendar />  
            </Route>
            <Route path="/student-workspace/chatroom">
              <Chatroom />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default HomeStudent;
