var assert = require('assert');

describe('Sugar String toAscii', function() {

  var toAscii = require('../sugar-string-to-ascii');

  it('should normalize single letters', function() {
    assert.equal('a', toAscii('à'));
  });

  it('should normalize words', function() {
    assert.equal('a', toAscii('à'));
    assert.equal('canon', toAscii('cañon'));
    assert.equal('Jorgen Kastholm', toAscii('Jørgen Kastholm'));
    assert.equal('Bodil Kjaer', toAscii('Bodil Kjær'));
  });

});
