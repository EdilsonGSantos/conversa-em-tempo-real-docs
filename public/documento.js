import { emitTextEditor, selectDoc } from "./socket-front-document.js";

const parameters = new URLSearchParams(window.location.search);
const nameDoc = parameters.get("nome");

const textEditor = document.getElementById("editor-texto");
const titleDoc = document.getElementById("titulo-documento");

titleDoc.textContent = nameDoc || "Documento sem título";

selectDoc(nameDoc);

textEditor.addEventListener("keyup", () => {
  emitTextEditor(textEditor.value, nameDoc);
});

function updateTextEditor(text) {
  textEditor.value = text;
}

export { updateTextEditor };
