(function(exports) {
  note = new Note("JavaScript is weird.");
  function testNewNote() {
    assert.isTrue(note.noteText === "JavaScript is weird.", 'testNewNote')
  };

  function testReturnNote() {
    assert.isTrue(note.returnNote() === "JavaScript is weird.", 'testReturnNote')
  };

  testNewNote();
  testReturnNote();
})(this);