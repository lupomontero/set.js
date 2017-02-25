'use strict';


const Assert = require('assert');
const Set = require('..');


describe('Set.add(value)', () => {

  it('debería añadir valor cuando no existe en set y retornar true', () => {

    const s = new Set();

    Assert.equal(s.size(), 0);
    Assert.equal(s.add(1), true);
    Assert.equal(s.size(), 1);
    Assert.equal(s.add(1), false);
    Assert.equal(s.size(), 1);
    Assert.equal(s.add(3), true);
    Assert.equal(s.size(), 2);
  });

});
