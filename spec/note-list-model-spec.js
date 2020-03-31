(function(exports) {
  // debugger
  noteList = new NoteList();
  function testNoteList() {
    if (noteList.returnNoteList() === noteList.list) {
      console.log("Passed:- testNoteList")
    } else {
      throw new Error("TEST FAILED: testNoteList")
    };
  };

  testNoteList();

})(this);