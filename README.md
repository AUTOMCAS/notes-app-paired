Model class: NotesModel
notesModel.js
notesModel.test.js

const model = new NotesModel();

model.getNotes(); // should return []

model.addNote('Buy milk');
model.addNote('Go to the gym');

model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

model.reset();

model.getNotes(); // should now return []

it('returns an empty list of items', () => {
const model = new NotesModel();

    expect(model.getItems()).toEqual([])

})

it('adds a new item to the list', () => {
const model = new NotesModel('My first note);

    expect(model.getItems()).toEqual(['My first note]);

})

it('clears all items from the list', () => {

})
