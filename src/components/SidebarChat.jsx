import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/SiderbarChat.css';
import { Avatar } from '@material-ui/core';
import { setChat } from '../features/chatSlice';
import { useState } from 'react';
import db from '../firebase';
import * as timeago from 'timeago.js';

function SidebarChat({ id, chatName }) {
  const dispatch = useDispatch();
  const [chatInfo, setChatInfo] = useState([]);

  useEffect(() => {
    db.collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setChatInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  return (
    <div
      onClick={() => {
        dispatch(
          setChat({
            chatId: id,
            chatName: chatName,
          })
        );
      }}
      className='sidebarchat'
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className='siderbarchat__info'>
        <h3>{chatName}</h3>
        <p>{chatInfo[0]?.messages}</p>
        <small>
          {timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()))}
        </small>
      </div>
    </div>
  );
}

export default SidebarChat;
