'use strict';


const D3 = require('d3');
const Venn = require('venn.js');
const Set = require('..');


const alumnas = [
  ['JavaScript', 'HTML', 'CSS'],
  ['JavaScript', 'C'],
  ['JavaScript'],
  ['JavaScript', 'Ruby'],
  ['JavaScript', 'CSS'],
  ['HTML', 'CSS'],
  ['JavaScript', 'HTML'],
  ['C']
];


const sets = alumnas.reduce((memo, alumna) => {

  alumna.forEach(lang => {

    if (!memo.hasOwnProperty(lang)) {
      memo[lang] = new Set();
    }
    memo[lang].add(alumna);
  });
  return memo;
}, {});


const langs = Object.keys(sets);
const data = langs.reduce((memo, key) => {

  memo.push({sets: [key], size: sets[key].size()});
  // calcular intersección con todos los demás sets...
  langs.forEach(lang => {

    if (key === lang) {
      return;
    }
    memo.push({
      sets: [key, lang],
      size: sets[key].intersect(sets[lang]).size()
    });
  });
  return memo;
}, []);

//console.log(data);

const chart = Venn.VennDiagram();

D3.select("#venn").datum(data).call(chart);
