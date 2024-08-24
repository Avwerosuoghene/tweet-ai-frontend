import { io, Socket } from 'socket.io-client';

const SOCKET_SERVER_URL = process.env.VUE_APP_API_URL;


const socket: Socket = io(SOCKET_SERVER_URL, {
  transports: ['websocket'],
  reconnectionAttempts: 5,
});

socket.on('connect_error', (err) => {
  console.error('Socket.IO connection error:', err);
});

socket.on('reconnect_attempt', () => {
  console.log('Attempting to reconnect...');
});

export default socket;