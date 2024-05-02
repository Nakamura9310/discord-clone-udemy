import React, { useEffect } from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import Login from './components/login/login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  // user情報によってログインページを表示する
  const user = useAppSelector((state) => state.user);

  // console.log(user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // firebaseのonAuthStateChangedによりログインユーザー情報を取得する
    auth.onAuthStateChanged((loginUser) => {
      // ユーザー情報はloginUserに入っている
      console.log(loginUser);

      if (loginUser) {
        dispatch(
          // 第一引数stateは自動で渡されるので記述不要、第二引数actionは自分で渡す
          // action.payloadでstate.userを更新する
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  // dispatchを第二引数に追加→dispatchが変更された時だけuseEffectが実行される
  // ただしdispatchが変更されることはないので、こう書くことでコンポーネントのレンダリング時に一度だけ実行される
  // 一般的にはuseEffect内で参照された変数(ここではdispatch, login, logoutとからしい)を第二引数に追加する

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
