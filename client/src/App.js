import React from 'react';
import './App.css';
import ChatStore from './ChatStore';
import Nav from './Nav';
import AddChat from './AddChat'
import {ChatProvider} from './ChatContext'


function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Nav />
        <AddChat />
        <ChatStore />
      </div>
    </ChatProvider>
  );
}

export default App;
