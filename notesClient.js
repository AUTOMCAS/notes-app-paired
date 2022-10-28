class NotesClient {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      });
  }

  createNote(newNote, callback, displayError) {
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        callback(data);
      })
      .catch((error) => {
        console.log('error');
        displayError(error);
      });
  }
}

module.exports = NotesClient;

// createNote(newNoteFromAPI, cb, displayError) {
//   const content = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ content: newNoteFromAPI })
//   }
//   fetch(this.#URL, content)
//     .then(response => response.json())
//     .then(data => {
//       console.log("Success:",data)
//       cb(data)
//     })
//     .catch(error => {
//       console.log('error')
//       displayError(error)
//   });
// }
