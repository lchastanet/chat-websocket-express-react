import { useState } from "react"
import ChatRoom from "./components/ChatRoom"
import NickNameForm from "./components/NickNameForm"

function App() {
  const [nickName, setNickName] = useState("")

  return (
    <>
      <header>
        <h1 style={{ marginLeft: "1rem" }}>Wild Chat</h1>
        {Boolean(nickName.length) && (
          <input
            type="button"
            value="disconnect"
            onClick={() => setNickName("")}
          />
        )}
      </header>

      {nickName && nickName.length >= 3 ? (
        <ChatRoom setNickName={setNickName} nickName={nickName} />
      ) : (
        <NickNameForm setNickName={setNickName} />
      )}
    </>
  )
}

export default App
