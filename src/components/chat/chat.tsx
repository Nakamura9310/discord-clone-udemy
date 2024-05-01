import React from 'react';
import './chat.scss';
import ChatHeader from './chatHeader';
import { Add } from '@mui/icons-material';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ChatMessage from './chatMessage';

const Chat = () => {
  return (
    <div className="chat">
      {/** chatHeader */}
      <ChatHeader />

      {/** chatMessage */}
      <div className="chatMessage">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>

      {/** chatInput */}
      <div className="chatInput">
        <Add />
        <form action="">
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardIcon />
          <GifIcon />
          <EmojiEmotionsIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
