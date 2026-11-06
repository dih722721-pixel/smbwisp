import http from 'http';
import { server as wisp } from '@mercuryworkshop/wisp-js/server';

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Wisp server backend is operational.\n');
});

// Use routeRequest to upgrade incoming WebSocket streams
server.on('upgrade', (req, socket, head) => {
    wisp.routeRequest(req, socket, head);
});

// Render requires binding to 0.0.0.0 to accept external requests
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Wisp network node listening on port ${PORT}`);
});
