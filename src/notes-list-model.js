function List() {
  this.notes = []
}

List.prototype.addNotes = function(noteText) { 
  note = new Note(noteText)
  this.notes.push(note)
}