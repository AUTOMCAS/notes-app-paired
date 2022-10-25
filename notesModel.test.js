const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  it('returns an empty list of items', () => {
    const notesModel = new NotesModel();
    expect(notesModel.getNotes()).toEqual([]);
  });

  it('adds a note to the notes array and returns it', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Pet the cat');
    expect(notesModel.getNotes()).toEqual(['Pet the cat']);
  });
});
