import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import {ChatProvider} from './ChatContext'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <ChatProvider>
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
    </Router>
    </ChatProvider>
  );
}

export default App;
