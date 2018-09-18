(function(exports) {
  debugger;
  function NotesListView(notesList) {
    this.notesList = notesList;
  }

  function notesListView(notesList) {
    return new NotesListView(notesList);
  }

  NotesListView.prototype.showNotesList = function() {
    return this.notesList;
  };

  NotesListView.prototype.viewNotesList = function() {
    return this.showNotesList().showNotes();
  };

  exports.notesListView = notesListView;
})(this);
