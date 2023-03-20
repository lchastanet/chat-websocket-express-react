import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import MessageForm from "./MessageForm";
import MessagesList from "./MessagesList";

function ChatRoom({ nickName, setNickName }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io("http://localhost:8000");

    setSocket(socket);

    socket.on("connect", () => {
      console.log("connection", socket.id);
    });

    return () => {
      //socket.emit("disconnectUser", socket.id);
      socket.off();
    };
  }, []);

  return (
    <div>
      <MessagesList socket={socket} />
      <MessageForm socket={socket} nickName={nickName} />{" "}
      <input
        type="button"
        value="disconnect"
        onClick={() => setNickName(null)}
      />
    </div>
  );
}

export default ChatRoom;
