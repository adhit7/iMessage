import React from 'react';
import '../styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';

function Login() {
  const signin = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png'
          alt=''
        />
        <h1>iMessage</h1>
      </div>

      <Button onClick={signin}>Sign In</Button>
    </div>
  );
}

export default Login;
