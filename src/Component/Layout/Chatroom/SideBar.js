import React from 'react';
import { Row, Col } from 'antd';
import RoomList from './RoomList';
const SideBar = () => {
  return (
    <div class="sidebar">
      <Row>
        <Col span={24} class="sidebar">
          <RoomList />
        </Col>
      </Row>
    </div>
  );
};

export default SideBar;
