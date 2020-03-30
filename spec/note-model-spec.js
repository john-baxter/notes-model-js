describe('Notes', function () {
  describe('create', function () {
    it('Can return text', function () {
      var note = new Note;
      expect(note.createNote('test note 1')).toEqual('test note 1');
    });
  });
});