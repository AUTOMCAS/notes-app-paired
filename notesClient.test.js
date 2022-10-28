const NotesClient = require('./notesClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks();

describe('Client class', () => {
  it('calls fetch and loads data', (done) => {
    // 1. Instantiate the class
    const notesClient = new NotesClient();

    // 2. We mock the response from `fetch`
    // The mocked result will depend on what your API
    // normally returns — you want your mocked response
    // to "look like" as the real response as closely as
    // possible (it should have the same fields).
    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ['This note is coming from the server'],
      })
    );

    // 3. We call the method, giving a callback function.
    // When the HTTP response is received, the callback will be called.
    // We then use `expect` to assert the data from the server contain
    // what it should.
    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes).toEqual([
        'This note is coming from the server',
      ]); // Because returnDataFromApi.notes is an array, we need
      // to use .toEqual. If it was a string, boolean or number,
      // we would use toBe.

      // 4. Tell Jest our test can now end.
      done();
    });
  });

  xit('Creates a new note on server', (done) => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ['This note is new!'],
      })
    );

    notesClient.createNote('This note is new!', (returnedDataFromApi) => {
      console.log('returnedDataFromApi', returnedDataFromApi);
      expect(returnedDataFromApi.notes.length).toEqual(1);
      expect(returnedDataFromApi.notes[0]).toEqual('This note is new!');
      done();
    });
  });

  it('adds a new note and loads all notes', (done) => {
    const notesClient = new NotesClient();

    fetch.mockResponseOnce(
      JSON.stringify({
        notes: ['This is a new note'],
      })
    );

    notesClient.loadNotes((returnedDataFromApi) => {
      expect(returnedDataFromApi.notes.length).toEqual(1);

      done();

      // const client = new NotesClient();

      // fetch.mockResponseOnce(
      //   JSON.stringify({
      //     content: 'This is a note',
      //   })
      // );

      // let newNoteFromAPI = 'This is a note';

      // notesClient.loadNotes((returnedDataFromApi) => {
      //   expect(returnedDataFromApi.notes).toEqual({
      //     content: 'This is a note',
      //   });

      //   // //client.createNote(newNoteFromAPI, (returnedDataFromApi) => {
      //   //   expect(returnedDataFromApi).toEqual({
      //   //     content: 'This is a note',
      //   //   });

      //   done();
    });
  });
});
