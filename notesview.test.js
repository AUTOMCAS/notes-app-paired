/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('Notes view', () => {
  it('displays two notes', () => {
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

  it('displays the notes as input from the user', () => {
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

  it('displays the right number of notes', () => {
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
    xit('fetches the data from the client and displays a note', (done) => {
      const mockNotesClient = {
        loadNotes: (callback) => (callback({ 'This note is coming from the server' }))
      }
      const notesModel = new NotesModel();
      const notesView = new NotesView(notesModel, notesClient);


      notesView.displayNotesFromApi(); // This should go after loadNotes

      expect(document.querySelectorAll('div.note')[0].textContent).toEqual(
          'This note is coming from the server');
      done();
    });
  });
});
