import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="0669c1e6-7feb-4de1-bbdd-3797671a4715"
      userName="rabobahago@gmail.com"
      userSecret="u07me1030"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}
export default App
