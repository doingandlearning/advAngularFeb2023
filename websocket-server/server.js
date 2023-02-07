const express = require("express");
const ws = require("ws");

const app = express();
const port = 5001;

const wsServer = new ws.Server({ noServer: true });
wsServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    wsServer.clients.forEach(function each(client) {
      const { source, content } = JSON.parse(message.toString());
      if (client.readyState === ws.OPEN) {
        setTimeout(function () {
          client.send(
            Buffer.from(
              JSON.stringify({
                source: `From server: ${source}`,
                content,
              })
            ),
            { binary: false }
          );
        }, 10);
      }
    });
  });
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

server.on("upgrade", (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, (socket) => {
    wsServer.emit("connection", socket, request);
  });
});

server.on("error", (error) => console.log(error));
