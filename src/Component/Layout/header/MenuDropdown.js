import { Menu, Button } from "antd";
import {auth} from '../../../firebase/config'
import { Link } from "react-router-dom";

export const RegisterDropdown = (
  <Menu>
    <Menu.Item className="dropdown">
      <Link to="/register">Register</Link>
    </Menu.Item>
  </Menu>
);


