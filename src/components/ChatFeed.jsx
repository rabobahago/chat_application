import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props
  const chat = chats && chats[activeChat]
  const renderMessages = (props) => {
    const keys = Object.keys(messages)
    return keys.map((key, index) => {
      const message = messages[key]
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessage = userName === message.render.username
      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block"></div>
        </div>
      )
    })
  }
  return <div>Chat Feed</div>
}
export default ChatFeed
