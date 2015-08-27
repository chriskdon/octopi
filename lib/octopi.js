"use strict";

module.exports = {
  parse: function(expression, obj) {
    var expr = expression.replace("$", "");    
    var parser = new Function('obj', 'return obj' + expr);

    return parser(obj);
  }
};
