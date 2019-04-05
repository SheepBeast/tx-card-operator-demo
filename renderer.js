// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var io = require("socket.io-client");

var socket = io("http://localhost:3000");

socket.on("connect", function() {
  console.log("socket connect");
});

// socket.on("reply", function(data) {
//   console.log("socket message data: ", data);
//   socket.send({
//     method: "read",
//     args: [1, "a"]
//   });
// });

socket.on("disconnect", function() {
  console.log("socket disconnect");
});

module.exports = socket