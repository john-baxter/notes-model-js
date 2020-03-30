
createNote('test');
if (listONotes.first == 'test') {
  console.log('notes are stored in a list');
  return true
} else {
  console.log('nothing stored in the array :: ERROR')
  return false
}