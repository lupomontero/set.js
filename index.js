'use strict';


function Set(iterable) {

  this.data = [];

  if (iterable) {
    [].forEach.call(iterable, (item) => {
      this.add(item);
    });
  }
}


Set.prototype.add = function (value) {

  if (this.data.indexOf(value) < 0) {
    this.data.push(value);
    return true;
  }

  return false;
};


Set.prototype.delete = function (value) {

  var pos = this.data.indexOf(value);

  if (pos >- 1) {
    this.data.splice(pos, 1);
    return true;
  }

  return false;
};


Set.prototype.has = function (value) {

  if (this.data.indexOf(value) > -1) {
    return true;
  }

  return false;
};


Set.prototype.clear = function () {

  this.data = [];
};


Set.prototype.size = function () {

  return this.data.length;
};


Set.prototype.values = function () {

  return this.data.slice(0);
};


Set.prototype[Symbol.iterator] = function () {
  var nextIndex = 0;
  return {
    next: () => {
      return nextIndex < this.data.length ?
               {value: this.data[nextIndex++], done: false} :
               {done: true};
    }
  };
};


//
// new set with elements from both `this` and `set`
//
Set.prototype.union = function (set) {

  const union = new Set();
  let el;

  for (el of this) {
    union.add(el);
  }

  for (el of set) {
    union.add(el);
  }

  return union;
};


//
// new set with elements common to `this` and `set`
//
Set.prototype.intersect = function (set) {

  var intersection = new Set();

  for (var i = 0; i < this.data.length; ++i) {
    if (set.has(this.data[i])) {
      intersection.add(this.data[i]);
    }
  }

  return intersection;
};


//
// test whether every element in set is in t
//
Set.prototype.subset = function () {};


//
// test whether every element in t is in set
//
Set.prototype.superset = function () {};


//
// new set with elements in s but not in t
//
Set.prototype.diff = function () {};


//
// new set with a shallow copy of s
//
Set.prototype.copy = function () {

  return new Set(this.values());
};


module.exports = Set;
