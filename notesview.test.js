/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Notes view', () => {
  xit('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    // 1. Setting up model and view
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('A first note');
    model.addNote('Another one');

    // 2. Display the notes on the page
    view.displayNotes();

    // 3. There should now be 2 div.note on the page
    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });

  xit('displays the notes as input from the user', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Pet the cat';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'Pet the cat'
    );
  });

  xit('displays the right number of notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'Pet the cat';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    const inputEl2 = document.querySelector('#add-note-input');
    inputEl2.value = 'Pet the dog';

    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[1].textContent).toEqual(
      'Pet the dog'
    );
  });

  describe('displayNotesFromApi', () => {
    it('fetches the data from the client and displays a note', (done) => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const notesModel = new NotesModel();
      notesModel.reset();

      const mockClient = {
        loadNotes: (callback) => {
          callback(['This note is coming from the server']);
        },
      };

      const notesView = new NotesView(notesModel, mockClient);

      notesView.displayNotesFromApi();

      expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
        'This note is coming from the server'
      );
      done();
    });
  });
});

describe('addNewNote', () => {
  it('adds a new note to the server', (done) => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesModel = new NotesModel();
    notesModel.reset();

    const newNote = 'This is a brand new note!';

    const mockClient = {
      loadNotes: (callback) => {
        callback(['This is a brand new note!']);
      },
      createNote: () => {
        notes: ['This note is new!'];
      },
    };

    // returnedDataFromApi { notes: [ 'This note is new!' ] }

    const notesView = new NotesView(notesModel, mockClient);

    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'This is a brand new note!';

    const buttonEl = document.querySelector('#add-note-button');
    buttonEl.click();

    notesView.displayNotesFromApi();

    expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
      'This is a brand new note!'
    );
    done();
  });
});
