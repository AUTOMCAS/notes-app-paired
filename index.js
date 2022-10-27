const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

const notesClient = new NotesClient();
const notesModel = new NotesModel();
const notesView = new NotesView(notesModel, notesClient);
console.log('before display notesfromapi');
notesView.displayNotesFromApi();
console.log('after display notesfromapi');
