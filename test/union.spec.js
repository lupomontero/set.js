'use strict';


const Assert = require('assert');
const Set = require('..');


describe('Set.union(t)', () => {

  it('debería arrojar error cuando argumento no es un set');

  it('debería calcular la unión entre dos sets', () => {

    const a = new Set([1, 2, 3]);
    const b = new Set([1, 3, 4]);

    Assert.deepEqual(a.union(b), new Set([1, 2, 3, 4]));
  });

});
