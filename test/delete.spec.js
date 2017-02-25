'use strict';


const Assert = require('assert');
const Set = require('..');


describe('Set.delete(value)', () => {

  it('debería borrar valor cuando existe en set y retornar true', () => {

    const s = new Set();

    Assert.equal(s.size(), 0);
    Assert.equal(s.add(1), true);
    Assert.equal(s.size(), 1);
    Assert.equal(s.delete(1), true);
    Assert.equal(s.size(), 0);
    Assert.equal(s.add(3), true);
    Assert.equal(s.size(), 1);
    Assert.equal(s.add(4), true);
    Assert.equal(s.size(), 2);
    Assert.equal(s.delete(1), false);
    Assert.equal(s.size(), 2);
    Assert.equal(s.delete(3), true);
    Assert.equal(s.size(), 1);
  });

});
