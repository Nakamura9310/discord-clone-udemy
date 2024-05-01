import React from 'react';
import { Avatar } from '@mui/material';
import './chatMessage.scss';

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          nakamura_k
          <span className="messageTimestamp">2024/05/01</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default ChatMessage;
