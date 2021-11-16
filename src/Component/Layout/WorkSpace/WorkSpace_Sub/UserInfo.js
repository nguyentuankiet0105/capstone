import React from 'react';
import { Button, Avatar, Typography, Dropdown } from 'antd';
import { auth, db } from '../../../../firebase/config';
import { AuthContext } from '../../../../Context/AuthProvider';
import { UserInfoDropdown } from './UserDropdown';

const UserInfo = () => {

  const {
    user: { displayName, photoURL },
  } = React.useContext(AuthContext);

  return (
    <div className="userinfo">
      <div className="container">
        <Typography.Text style={{ fontWeight: '600', paddingRight: '10px' }}>
          {displayName}
        </Typography.Text>
        <Dropdown overlay={UserInfoDropdown} placement="bottomCenter" arrow>
          <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
        </Dropdown>
      </div>
    </div>
  );
};

export default UserInfo;
