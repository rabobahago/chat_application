import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]
  console.log(chat, userName, messages)
  return <div>Chat Feed</div>
}
export default ChatFeed
