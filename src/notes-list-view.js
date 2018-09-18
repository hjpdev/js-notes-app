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
    return this.showNotesList().showNotes().forEach(function(element) {
      <ul><li><div>element.content</div></li></ul>
    });
  };
  
  exports.notesListView = notesListView;
})(this);
