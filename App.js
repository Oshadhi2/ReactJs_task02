// src/App.js
import React from "react";
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from "./Components/ChatFeed";

const App = () => {
  return(
    <ChatEngine
        height='100vh'
        projectID='cc213069-1f8b-4c1d-8d71-1e13ee723ac8'
        userName='ShehanPerera'
        userSecret='123456'
        renderChatFeed={(chatAppProps) => <ChatFeed  {... chatAppProps} />}
    />
  )
}


export default App;
