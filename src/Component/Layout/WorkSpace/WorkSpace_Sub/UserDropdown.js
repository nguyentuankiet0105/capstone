import { Button, Menu } from "antd";
import { auth } from '../../../../firebase/config';

export const UserInfoDropdown = (
  <Menu>
    <Menu.Item className="dropdown">
        <Button onClick={() => auth.signOut()}>Log out</Button>
    </Menu.Item>
  </Menu>
)
