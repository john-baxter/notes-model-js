(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.htmlConversion = function() {
    var htmlArray = [];
    this.noteList.list.forEach(element => {
      htmlArray.push(`<li><div>${element.noteText}</div></li>`)
    });
    return `<ul>${htmlArray.join("")}</ul>`
  }

  exports.NoteListView = NoteListView
})(this);