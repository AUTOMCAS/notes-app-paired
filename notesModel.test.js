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

  it('adds two notes to the notes array and returns them', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Pet the cat');
    notesModel.addNote('Be the cats slave');

    expect(notesModel.getNotes()).toEqual(['Pet the cat', 'Be the cats slave']);
  });

  it('empties the list and returns an empty list when only one element', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Pet the cat');
    notesModel.reset();
    expect(notesModel.getNotes()).toEqual([]);
  });
});
