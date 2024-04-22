import { updateTextEditor } from "./documento.js";

const socket = io();

function selectDoc(nome) {
  socket.emit("select_doc", nome);
}

function emitTextEditor(text, nome) {
  socket.emit("text_editor", text, nome);
}

socket.on("text_editor_clients", (text) => {
  updateTextEditor(text);
});

export { emitTextEditor, selectDoc };
