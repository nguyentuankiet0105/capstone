/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, Input, Button, Checkbox } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  GoogleCircleFilled,
  FacebookFilled,
  SkypeFilled,
} from '@ant-design/icons';
import register from '../../../Assets/Login/register_2.svg';
import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import firebase, { auth, db } from '../../../firebase/config';
import { addDocument, generateKeywords } from '../../../firebase/services';

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const history = useHistory();

  const handleLogin = async (fbProvider) => {
    const {additionalUserInfo, user} = await auth.signInWithPopup(fbProvider);
    if(additionalUserInfo?.isNewUser){
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId
      })
    }
  };

  const [loginForm, setLoginForm] = React.useState({
    username: '',
    password: '',
  });
  const { username, password } = loginForm;
  const onChangeLoginForm = (e) => setLoginForm({ ...loginForm, [e.target.value]: e.target.value });
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    if (values.username === 'student@gmail.com') {
      alert('success student login');
      history.push('/student-workspace');
    } else if (values.username === 'teacher@gmail.com') {
      alert('success teacher login');
      history.push('/teacher-workspace');
    } else {
      alert('username or password incorrect');
    }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__img">
          <img src={register} alt="register" />
        </div>
        <div className="login__form">
          <h1>Sign In</h1>
          <Form
            layout={'vertical'}
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              className="login__form--ipn"
              name="username"
              value={username}
              onChange={onChangeLoginForm}
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input
                className="ipn"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              className="login__form--ipn"
              name="password"
              value={password}
              onChange={onChangeLoginForm}
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input.Password
                className="ipn"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className="login__form--cbk">Remember me</Checkbox>
              </Form.Item>

              <a href="#" className="login__form--forgot">
                Forgot password ?
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login__form--btn">
                Submit
              </Button>
              <Form.Item>
                <GoogleCircleFilled
                  style={{
                    fontSize: '30px',
                    cursor: 'pointer',
                    marginLeft: '39%',
                    marginTop: '2%',
                  }}
                  onClick={() => handleLogin(googleProvider)}
                  className="login__form--socialbtn"
                />
                <FacebookFilled
                  style={{ fontSize: '30px', cursor: 'pointer', marginLeft: '3%' }}
                  onClick={() => handleLogin(fbProvider)}
                  className="login__form--socialbtn"
                />
                <SkypeFilled
                  style={{ fontSize: '33px', cursor: 'pointer', marginLeft: '3%' }}
                  className="login__form--socialbtn"
                />
              </Form.Item>
              <span className="login__form--signup">
                Or <Link to="/register">register now!</Link>
              </span>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
