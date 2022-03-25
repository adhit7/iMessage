import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import Chatbox from "../src/components/Chatbox";
import Login from "./components/Login";
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch(login({
          uid :authUser.uid,
          photo : authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else{
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      {user? <Chatbox /> : <Login />}
    </div>
  );
}

export default App;
