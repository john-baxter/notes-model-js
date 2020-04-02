(function(exports) {
  function Note(noteText){
    this.noteText = noteText;
    this.truncatedNote = noteText.substr(0, 20);

  };

  Note.prototype.returnNote = function() {
    return this.noteText
  };

  exports.Note = Note
})(this);