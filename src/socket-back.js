import io from "./server.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID: ", socket.id);

  socket.on("select_doc", (nome) => {
    socket.join(nome);
  });

  socket.on("text_editor", (text, nome) => {
    socket.to(nome).emit("text_editor_clients", text);
  });
});
