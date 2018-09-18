(function(exports) {
  function NotesListView(notesList) {
    this.notesList = notesList;
  }

  function notesListView() {
    return new NotesListView();
  }

  NotesListView.prototype.viewNotesList = function() {
    return this.notesList.showNotes();
    // return []
  };

  exports.notesListView = notesListView;
})(this);
