const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer()

const io = socketIo(server, {
  cors: '*'
})

io.on('connection', (socket) => {
  console.log('connected')
  console.log(socket.id)
  
  socket.on('message', (data) => {
    console.log('message: ', data)
    
    setTimeout(() => {
      io.emit('message', data)
    }, 3000)
  })
})

// io.on('message', (data) => {
//   console.log('message: ', data)
//   io.emit('message', data)
// })

const obj = {
  chatId: []
}

server.listen(3000, () => {
  console.log('server started...')
})
