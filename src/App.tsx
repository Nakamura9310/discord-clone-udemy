import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import { useSelector } from 'react-redux';
import Login from './components/login/login';
import { useAppSelector } from './app/hooks';

function App() {
  // user情報によってログインページを表示する
  const user = useAppSelector((state) => state.user);

  console.log(user);

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
