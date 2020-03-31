(function(exports) {
  note = new Note("JavaScript is weird.");
  function testNewNote() {
    if (note.noteText === "JavaScript is weird.") {
      console.log("Passed:- testNewNote")
    } else {
      throw new Error("TEST FAILED: testNewNote")
    };
  };
  testNewNote();
})(this);