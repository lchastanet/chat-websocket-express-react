import { useState } from "react";
import ChatRoom from "./components/ChatRoom";
import NickNameForm from "./components/NickNameForm";

function App() {
  const [nickName, setNickName] = useState("");

  return (
    <>
      <h1 style={{ marginLeft: "1rem" }}>Wild Chat</h1>
      {nickName && nickName.length >= 3 ? (
        <ChatRoom setNickName={setNickName} nickName={nickName} />
      ) : (
        <NickNameForm setNickName={setNickName} />
      )}
    </>
  );
}

export default App;
