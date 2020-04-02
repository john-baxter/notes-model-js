(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.htmlConversion = function(showTruncatedNotes) {
    var htmlArray = [];
    this.noteList.list.forEach(element => {
      htmlArray.push(`<li><div>${element.noteText}</div></li>`)
    });
    return `<ul>${htmlArray.join("")}</ul>`
  }
  
  NoteListView.prototype.showTruncatedNotes = function() {
    var truncatedNoteArray = [];
    this.noteList.list.forEach(element => {
      truncatedNoteArray.push(`<li><div>${element.truncatedNote}...</div></li>`)
    });
    return `<ul>${truncatedNoteArray.join("")}</ul>`
  }

  exports.NoteListView = NoteListView
})(this);
