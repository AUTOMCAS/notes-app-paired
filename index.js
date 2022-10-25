const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const notesModel = new NotesModel();
const notesView = new NotesView(notesModel);

notesModel.addNote('Pet the cat');
notesView.displayNotes();
