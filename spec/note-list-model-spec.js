(function(exports) {
  noteList = new NoteList();
  function testNoteList() {
    if (noteList.returnNoteList() === noteList.list) {
      console.log("Passed:- testNoteList")
    } else {
      throw new Error("TEST FAILED: testNoteList")
    };
  };
  
  function testNotePush() {
    noteList = new NoteList();
    noteList.notePush("Test .notePush method");
    if (noteList.returnNoteList()[0].noteText === "Test .notePush method") {
      console.log("Passed:- testNotePush")
    } else {
      console.log(noteList.returnNoteList())
      throw new Error("TEST FAILED: testNotePush")
    };
  };


  testNoteList();
  testNotePush();
})(this);