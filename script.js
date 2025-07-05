const form = document.getElementById("note-form");
const textarea = document.getElementById("note-textarea");
const notesList = document.getElementById("notes-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = textarea.value.trim();
  if (text === "") return;
  createNote(text);
  textarea.value = "";
});

function createNote(text) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const noteTitle = document.createElement("span");
  noteTitle.textContent = "Note";
  noteTitle.classList.add("note-title");
  noteDiv.appendChild(noteTitle);

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("note-delete-button");
  deleteBtn.addEventListener("click", () => noteDiv.remove());
  noteDiv.appendChild(deleteBtn);

  const noteText = document.createElement("div");
  noteText.textContent = text;
  noteText.classList.add("note-text");
  noteDiv.appendChild(noteText);

  notesList.appendChild(noteDiv);
}
