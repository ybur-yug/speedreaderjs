describe("Reader", function() {
  it("sets up an object as the reader to contain and output the information", function() {
    var reader = Object.create(Reader);
    reader.should.exist;
  });

  it("has a method to set a body of text up to be read", function() {
    var reader = Object.create(Reader);
    reader.setBodyOfText("this text");
    reader.bodyOfText.should.equal("this text");
  });

  describe('createWordChunks', function() {
    it('splits the body of text into an array of chunks of words', function() {
      var reader = Object.create(Reader);
      reader.setBodyOfText("The quick brown fox jumps over the lazy dog. Grumpy wizards make toxic brew for the evil Queen and Jack. Penis.");
      reader.createWordChunks(5);
      reader.wordChunks[0].should.equal("The quick brown fox jumps");
    });
  });

  describe('setInterval', function() {
    it('sets the interval of how many words per minute one wants to read and displays them with appropriate timing', function() {
      var reader = Object.create(Reader);
      reader.setInterval(300);
      reader.interval.should.equal(1000);
    });
  });

  describe('nextChunk', function() {
    it("makes the active chunk of words being displayed pushed out and pulls the next for reading", function() {
      var reader = Object.create(Reader);
      reader.setBodyOfText("this is some text yo it needs to be long enough to actually make some chunkns....so here ya go. bobbys awesome.t his has been fun. have a ballin ass day honky");
      reader.createWordChunks(5);
      reader.nextChunk();
      reader.nextChunk().should.equal("it needs to be long");/*thats what she said*/
    });
  });
});