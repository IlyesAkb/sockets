import { io } from 'socket.io-client'

const btn = document.querySelector('#btn')
const input = document.querySelector('#input')

const socket = io('http://localhost:3000')

socket.on('connected', (data) => {
  console.log('handle connected: ', data)
})

socket.on('message', (data) => {
  console.log('message: ', data)
})

btn.addEventListener('click', () => {
  socket.emit('message', input.value)
  input.value = ''
})


