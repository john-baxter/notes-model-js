(function(exports) {
  function NoteView(note) {
    this.note = note
  }

  NoteView.prototype.htmlConverterSingle = function() {
    return `<div>${this.note.noteText}</div>`
  }

  exports.NoteView = NoteView
})(this)
