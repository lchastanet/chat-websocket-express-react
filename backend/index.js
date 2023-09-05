const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")

const app = express()

const server = http.createServer(app)

app.use(cors())

const port = parseInt(process.env.APP_PORT, 10) || 8000

const io = new Server(server, { cors: { origin: "*" } })

io.on("connection", (socket) => {
  console.log("New user: ", socket.id)

  socket.on("sendMessage", (data) => {
    console.log("message received")
    io.emit("newMessage", data)
  })

  socket.on("disconnect", () => {
    console.log("user desconnected: ", socket.id)
  })
})

server.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Server is running on port ${port}`)
  }
})
