var should = require('should');

var Tokenizer = require('../lib/tokenizer');
var InvalidArgumentException = require('../lib/exceptions/invalid-argument-exception');

describe('tokenizer', function () {
  it('can save rules', function () {
    var t = new Tokenizer();
    t.addRule(/a/, "A");
    t.addRule(/b/, "B");
    t.addRule(/a/, function(token) {
      return "C";
    });
  });

  it('should throw error for invalid rules', function() {
    var t = new Tokenizer();

    should(function() { t.addRule();  }).throw(InvalidArgumentException);
    should(function() { t.addRule(""); }).throw(InvalidArgumentException);
    should(function() { t.addRule("test", "test"); }).throw(InvalidArgumentException);
    should(function() { t.addRule(/test/); }).throw(InvalidArgumentException);
    should(function() { t.addRule(null, "test"); }).throw(InvalidArgumentException);
  });
});
