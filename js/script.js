const notes = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];
const my_form = document.querySelector("form");
const new_note = document.querySelector("#new-note");
const notes_container = document.querySelector("#notes-container");
const clear_notes = document.querySelector("#clear-notes");

my_form.onsubmit = (e) => {
  e.preventDefault();
  notes.push(new_note.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(true);
};

clear_notes.addEventListener("click", () => {
  notes.length = 0;
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(false);
});

function renderNotes(appendingNote) {
  if (appendingNote) {
    const note_to_append = document.createElement("pre");
    note_to_append.textContent = notes.at(-1);
    notes_container.appendChild(note_to_append);
  } else {
    notes_container.replaceChildren();
    for (let i = 0; i < notes.length; i++) {
      const note_to_append = document.createElement("pre");
      note_to_append.textContent = notes[i];
      notes_container.appendChild(note_to_append);
    }
  }
}

function clearNotes() {
  notes = [];
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(false);
}

renderNotes(false);
