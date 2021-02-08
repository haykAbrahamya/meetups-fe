import openSocket from 'socket.io-client'


const SOCKET_ENDPOINT = 'http://localhost:5050'

let socket = null

export const initSocket = (userId) => {
  socket = openSocket(SOCKET_ENDPOINT, { query: `userId=${userId}` })
}

export const subscribeSocket = (type, cb) => {
  socket.on(type, props => cb({ notification: props }))
}

export const sendMessage = (type, message) => {
  socket.emit(type, message)
}

export const closeSocket = (userId) => {
  socket.disconnect()
}