# Understanding WebSockets and WebRTC

## WebSockets

WebSockets is a communication protocol that provides full-duplex communication channels over a single TCP connection. It enables real-time, bidirectional communication between a client and a server.

Usage
1. Establishing a WebSocket Connection: The client initiates a WebSocket connection by sending a WebSocket handshake request to the server.

2. Sending and Receiving Messages: Once the connection is established, both the client and the server can send and receive messages asynchronously.

3. Handling Events: WebSockets support various events such as open, close, message, and error, allowing developers to handle different scenarios in their applications.

__Code Snippet__

```javascript
// Client-side WebSocket connection
const socket = new WebSocket('ws://localhost:3000');

socket.onopen = () => {
  console.log('WebSocket connection established');
};

socket.onmessage = (event) => {
  console.log('Received message:', event.data);
};

socket.onerror = (error) => {
  console.error('WebSocket error:', error);
};

socket.onclose = () => {
  console.log('WebSocket connection closed');
};

```

```javascript 
// Server-side WebSocket handling (Node.js with ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log('Received message:', message);
    // Process and respond to the message
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

```

## WebRTC (Web Real-Time Communication)

WebRTC is a collection of APIs and protocols that enable real-time communication between web browsers and mobile applications. It allows peer-to-peer audio, video, and data transmission directly between devices without requiring intermediary servers.

Usage
1. Peer-to-Peer Connection Establishment: WebRTC facilitates the establishment of peer-to-peer connections between devices using a signaling server to exchange session metadata.

2. Media Streaming: Once the peer connection is established, WebRTC enables streaming of audio, video, and data streams between peers.

3. Signaling: Signaling is the process of coordinating and negotiating the connection between peers. It involves exchanging session control messages, such as session initiation, negotiation, and termination.



__Code Snippet__

```javascript 

// Example of WebRTC connection establishment
const configuration = { iceServers: [{ urls: 'stun:stun.example.com' }] };
const peerConnection = new RTCPeerConnection(configuration);

peerConnection.onicecandidate = (event) => {
  if (event.candidate) {
    // Send ICE candidate to the remote peer
  }
};

peerConnection.ontrack = (event) => {
  // Handle incoming media streams (audio/video)
};

navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then((stream) => {
    // Add local media stream to peer connection
    stream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, stream);
    });
  })
  .catch((error) => {
    console.error('Error accessing media devices:', error);
  });

```