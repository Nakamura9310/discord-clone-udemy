import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import { useSelector } from 'react-redux';
import Login from './components/login/login';

function App() {
  // user情報によってログインページを表示する
  // const user = useSelector((state) => state.user.user);
  const user = null; // TODO 一旦nullにしている

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
