import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';

function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />

      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
