import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import '../styles/Message.css';

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, messages, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && 'message__sender'}`}
      >
        <Avatar className='message__photo' src={photo} />
        <p>{messages}</p>
        <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Message;
