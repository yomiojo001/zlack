import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import ChatStore from './ChatStore';
import Nav from './Nav';
import AddChat from './AddChat'
import {ChatProvider} from './ChatContext'
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
    // <ChatProvider>
    //   <div className="App">
    //     <Nav />
    //     <AddChat />
    //     <ChatStore />
    //   </div>
    // </ChatProvider>
  );
}

export default App;
