(function(exports) {
  note = new Note("JavaScript is weird.");
  function testNewNote() {
    if (note.noteText === "JavaScript is weird.") {
      console.log("Passed:- testNewNote")
    } else {
      throw new Error("TEST FAILED: testNewNote")
    };
  };

  function testReturnNote() {
    if (note.returnNote() === "JavaScript is weird.") {
      console.log("Passed:- testReturnNote")
    } else {
      throw new Error("TEST FAILED: testReturnNote")
    };
  };

  testNewNote();
  testReturnNote();
})(this);