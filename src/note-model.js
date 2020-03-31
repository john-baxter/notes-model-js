(function(exports) {
  function Note(noteText){
    this.noteText = noteText;

  };

  Note.prototype.returnNote = function() {
    return this.noteText
  };

  exports.Note = Note
})(this);