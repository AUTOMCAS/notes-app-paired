class NotesView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = document.querySelector('.note');
  }

  displayNotes() {
    return this.notes;
  }
}

module.exports = NotesView;
