(function(exports) {
  function testNoteListView() {
    noteList = new NoteList
    noteListView = new NoteListView(noteList)
    assert.isTrue(noteListView.noteList.list.length === 0, 'testNoteListView')
  }
  
  function testHtmlConversion() {
    noteList = new NoteList
    noteList.notePush("testing HTML conversion")
    noteListView = new NoteListView(noteList)
    var htmlConversion = noteListView.htmlConversion()
    assert.isTrue(htmlConversion === "<ul><li><div>testing HTML conversion</div></li></ul>", 'testHtmlConversion')
  }
  
  function testHtmlConversionMulti() {
    noteList = new NoteList
    noteList.notePush("testing HTML conversion once")
    noteList.notePush("testing HTML conversion twice")
    noteListView = new NoteListView(noteList)
    var htmlConversion = noteListView.htmlConversion()
    assert.isTrue(htmlConversion === "<ul><li><div>testing HTML conversion once</div></li><li><div>testing HTML conversion twice</div></li></ul>", 'testHtmlConversionMulti')
  }
  
  function testHtmlConversionEmpty() {
    noteList = new NoteList
    noteListView = new NoteListView(noteList)
    var htmlConversion = noteListView.htmlConversion()
    assert.isTrue(htmlConversion === "<ul></ul>", 'testHtmlConversionEmpty')
  }
  
  function testShowTruncatedNotes() {
    noteList = new NoteList
    noteList.notePush("testing note can be truncted")
    noteListView = new NoteListView(noteList)
    var showTruncatedNotes = noteListView.showTruncatedNotes()
    assert.isTrue(showTruncatedNotes === '<ul><li><div>testing note can be ...</div></li></ul>', 'testShowTruncatedNotes')
  }

  testShowTruncatedNotes()
  testHtmlConversionEmpty()
  testHtmlConversionMulti()
  testHtmlConversion()
  testNoteListView()
})(this)
