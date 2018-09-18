describe("Note", function() {
  describe(".text()", function() {
    it("returns the conent of the note", function() {
      newNote = note("Hello");
      expect(newNote.text()).toEqual("Hello");
    });
  });
});
