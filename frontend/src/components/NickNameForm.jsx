import { useState } from "react"

function NickNameForm({ setNickName }) {
  const [input, setInput] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.length >= 3) {
      setNickName(input)
    } else {
      alert("Please choose a nickname !")
    }
  }

  return (
    <div className="connect-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nickName"
          id="nickName"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Entrer" />
      </form>
    </div>
  )
}

export default NickNameForm
