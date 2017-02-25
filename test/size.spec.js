'use strict';


const Assert = require('assert');
const Set = require('..');


describe('Set.size()', () => {

  it('debería retornar el número de elementos en el set', () => {

    const s = new Set();

    Assert.equal(s.size(), 0);
    Assert.equal(s.add(1), true);
    Assert.equal(s.size(), 1);
    Assert.equal(s.add(2), true);
    Assert.equal(s.size(), 2);
    Assert.equal(s.add(3), true);
    Assert.equal(s.size(), 3);
    Assert.equal(s.clear(), undefined);
    Assert.equal(s.size(), 0);
  });

});
