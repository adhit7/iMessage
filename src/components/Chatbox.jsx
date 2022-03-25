import React from 'react';
import "../styles/Chatbox.css";
import Sidebar from './Sidebar';
import Chat from './Chat';

function Chatbox() {
    return (
        <div className="chatbox">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default Chatbox;
