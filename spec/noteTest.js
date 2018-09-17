
var string = 'My favourite language is JavaScript'
var testNote = new Note(string)


function hasText() {
  assert.isTrue(testNote.text === string)
}

hasText()
