/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView');

describe('Page view', () => {
  it('displays the title', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const notesView = new NotesView();
    expect(document.querySelectorAll('h1').length).toBe(1);
  });
});

describe('displayNotes', () => {
  it('displays the notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView();

    expect(notesView.displayNotes()).toEqual(null);
  });
});
