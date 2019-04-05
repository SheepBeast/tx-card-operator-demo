const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", client => {
  client.on("req-read", () => {
    client.broadcast.emit("req-read");
  });

  client.on("req-write", data => {
    client.broadcast.emit("req-write", data);
  });

  client.on("res-read", data => {
    client.broadcast.emit("res-read", data);
  });

  client.on("res-write", data => {
    client.broadcast.emit("res-write", data);
  });
});

server.listen(3000, "127.0.0.1", () => {
  console.log("socket service is listenning");
});
