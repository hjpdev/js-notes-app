describe("Notes list", function() {

beforeEach(function() {
  nl = notesList();
  nl.addNote("Hello1");
  nl.addNote("Hello2");
  nl.addNote("Hello3");
});

  describe(".showNote", function() {
    it("shows all notes", function() {
      expect(nl.showNotes()[0].text()).toEqual("Hello1")
      expect(nl.showNotes()[1].text()).toEqual("Hello2")
      expect(nl.showNotes()[2].text()).toEqual("Hello3")
    });
  });
  describe(".addNote", function() {
    it("adds a note", function() {
      nl.addNote("Hello4");
      expect(nl.showNotes()[3].text()).toEqual("Hello4")
    });
  });
});
