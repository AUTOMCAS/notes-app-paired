const NotesModel = require('./notesModel');

const notesModel = new NotesModel();

console.log(notesModel.getNotes());
notesModel.displayNotes();
