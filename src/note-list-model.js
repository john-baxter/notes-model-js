(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.returnNoteList = function() {
    return this.list
  };

  exports.NoteList = NoteList
})(this);