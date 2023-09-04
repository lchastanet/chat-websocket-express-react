import { useState, useEffect } from "react"
import { io } from "socket.io-client"
import MessageForm from "./MessageForm"
import MessagesList from "./MessagesList"

function ChatRoom({ nickName }) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socket = io("http://localhost:8000")

    setSocket(socket)

    socket.on("connect", () => {
      console.log("connection", socket.id)
    })

    return () => {
      socket.disconnect()
      socket.off()
    }
  }, [])

  return (
    <>
      <MessagesList socket={socket} />
      <MessageForm socket={socket} nickName={nickName} />{" "}
    </>
  )
}

export default ChatRoom
