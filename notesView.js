class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
      document.querySelector('#add-note-input').value = '';
      // this.displayNotes();
    });
  }

  displayNotes() {
    document.querySelectorAll('.note').forEach((note) => {
      note.remove();
    });
    const notes = this.model.getNotes();

    // For each note, create and append a new element on the main container
    notes.forEach((note) => {
      const noteEl = document.createElement('div');
      noteEl.textContent = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
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

// function firstFunction(_callback) {
//   // do some asynchronous work
//   // and when the asynchronous stuff is complete
//   _callback();
// }

// function secondFunction() {
//   // call first function and pass in a callback function which
//   // first function runs when it has completed
//   firstFunction(function () {
//     console.log("huzzah, I'm done!");
//   });
// }
