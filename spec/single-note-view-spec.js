function noteModelDouble() {
  this.noteText = "testing note view instantiation"
}

function testNoteViewInstantiation() {
  noteView = new NoteView(new noteModelDouble())
  assert.isTrue(noteView.note.noteText === "testing note view instantiation", 'testNoteViewInstantiation')
}

function testWrapNoteTextInHtml() {
  noteView = new NoteView(new noteModelDouble())
  htmlConverter = noteView.htmlConverterSingle()
  assert.isTrue(htmlConverter === '<div>testing note view instantiation</div>', 'testWrapNoteTextInHtml')
}

testWrapNoteTextInHtml()
testNoteViewInstantiation()
