(function(exports) {
  noteList = new NoteList();
  function testNoteList() {
    assert.isTrue(noteList.returnNoteList() === noteList.list, 'testNoteList')
  };
  
  function testNotePush() {
    noteList = new NoteList();
    noteList.notePush("Test .notePush method");
    assert.isTrue(noteList.returnNoteList()[0].noteText === "Test .notePush method", 'testNotePush')
  };

  testNoteList();
  testNotePush();
})(this);