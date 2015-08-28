var octopi = require('../index');
var should = require('should');

var testObj = {
  flat: true,
  nested: {
    base: true,
    layer: {
      value: 3
    }
  }
};

describe('octopi', function () {
  it('should access value with dot notation', function () {
    var result1 = octopi.parse("$.flat", testObj);
    var result2 = octopi.parse("$.nested.base", testObj);
    var result3 = octopi.parse("$.nested.layer.value  ", testObj);

    result1.should.equal(testObj.flat);
    result2.should.equal(testObj.nested.base);
    result3.should.equal(testObj.nested.layer.value);
  });
});
