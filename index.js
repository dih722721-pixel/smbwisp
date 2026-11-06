import http from 'http';
import { createWispServer } from '@wisp-js/server';

const PORT = process.env.PORT || 8080;

// Create a standard HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Wisp server backend is operational.\n');
});

// Attach the Wisp protocol handler to the server's WebSocket upgrade event
server.on('upgrade', (req, socket, head) => {
    createWispServer(req, socket, head);
});

// Start listening for network traffic
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
