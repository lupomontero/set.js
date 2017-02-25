'use strict';


const Assert = require('assert');
const Set = require('..');


describe('Set.has(value)', () => {

  it('debería retornar booleano indicando si el valor está en el set', () => {

    const s = new Set();

    Assert.equal(s.size(), 0);
    Assert.equal(s.has(1), false);
    Assert.equal(s.add(1), true);
    Assert.equal(s.size(), 1);
    Assert.equal(s.has(1), true);
    Assert.equal(s.delete(1), true);
    Assert.equal(s.has(1), false);
  });

});
