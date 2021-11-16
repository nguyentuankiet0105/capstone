import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import UserInfo from "./UserInfo"

const HeaderWS = () => {
  return (
    <div className="headerWS">
      <div className="container">
        <h1>Student Workspace</h1>
        <Link to="/News">
          <Button>Back to Home</Button>
        </Link>
        <div className="headerWS__userinfo">
        <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default HeaderWS;
