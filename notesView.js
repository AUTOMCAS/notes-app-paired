class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;

      this.addNewNote(newNote);
      document.querySelectorAll('.note').forEach((note) => {
        note.remove();
      });
      this.displayNotesFromApi();
      document.querySelectorAll('.note').forEach((note) => {
        note.remove();
      });
      document.querySelector('#add-note-input').value = '';
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });
    const notes = this.model.getNotes();

    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    // this.model.addNote(newNote);
    // this.client.createNote(newNote, () =>
    this.client.createNote(newNote);
    // this.displayNotesFromApi();
    this.displayNotes();
  }

  displayNotesFromApi() {
    this.client.loadNotes((notes) => {
      this.model.setNotes(notes);
      this.displayNotes();
    });
  }
}

module.exports = NotesView;
