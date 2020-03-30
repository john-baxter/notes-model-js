// function Note() {
//   this.noteList = [];
// }

// Note.prototype.createNote = function (string) {
//   this.pushNote(string);
// };

// Note.prototype.listONotes = function () {
//   return this.noteList;
// };

// Note.prototype.pushNote = function (createNote) {
//   this.noteList.push(createNote);
// };

(function(exports) {
  var noteList = [];

  function createNote (string) {
    this.pushNote(string);
  };
  
  function listONotes () {
    return this.noteList;
  };
  
  function pushNote (createNote) {
    this.noteList.push(createNote);
  };

  exports.createNote = createNote;
  exports.listONotes = listONotes;
  exports.pushNote = pushNote;

})