var _ = require("underscore");
var InvalidArgumentException = require('./exceptions/invalid-argument-exception');

function Tokenizer() {
  this.rules = []; // Rule order matters
}

Tokenizer.prototype.addRule = function(regex, type) {
  if(!_.isRegExp(regex)) { throw new InvalidArgumentException("first argument must be a regular expression"); }
  if(!type) { throw new InvalidArgumentException("type must be defined"); }

  this.rules.push({
    regex: regex,
    type: type
  });
};

// Returns an array of tokens
Tokenizer.prototype.tokenize = function(str) {
  var output = [];

  while(str != '') {
    var match = false;

    this.rules.forEach(function(rule) {
      var m = str.match(rule.regex);
      if(m && m.index == 0) { // Has match and is at start
        match = true;
        var token = m[0];

        // Push token into output
        if(_.isFunction(rule.type)) {
          output.push(rule.type(token));
        } else {
          output.push(rule.type);
        }

        // Remove the token and break
        str = str.replace(token, '');
        return;
      }
    });

    if(!match) {
      throw new Error("Unexpected character in input: " + str);
    }
  }

  return output;
};

module.exports = Tokenizer;
