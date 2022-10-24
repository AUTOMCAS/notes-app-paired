const NotesModel = require('./notesModel');

it('returns an empty list of items', () => {
  const notesModel = new NotesModel();
  expect(notesModel.getNotes()).toEqual([]);
});
