import { useState, useEffect } from "react"

function MessagesList({ socket }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (socket) {
      socket.on("newMessage", (message) => {
        setMessages([...messages, message])
      })
    }
  }, [messages, socket])

  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <p
          key={index}
          className={message.id === socket.id ? "mines" : "others"}
        >
          <strong>{message.author}</strong>: {message.text}
        </p>
      ))}
    </div>
  )
}

export default MessagesList
