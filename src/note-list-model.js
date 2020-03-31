(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.returnNoteList = function() {
    return this.list
  };

  NoteList.prototype.notePush = function(noteToPush) {
    this.list.push(new Note(noteToPush));
  };

  exports.NoteList = NoteList
})(this);