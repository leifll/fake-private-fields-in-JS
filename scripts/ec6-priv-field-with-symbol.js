'use strict';

/* eslint-disable max-len */

/**
 * Creates constructor and functions of the Person object.
 */
const PersonConstr = (function() {
  const nameSymbol = Symbol('name'); // This is shared between all Person objects, in a closure.

  /**
   * The Person constructor.
   * @param {String} name The name of the newly created Person.
   */
  function Person(name) {
    this[nameSymbol] = name;
  }

  Person.prototype.getName = function() {
    return this[nameSymbol];
  };

  return Person;
})();

const person = new PersonConstr('John');
console.log('Person name: ' + person.getName());
delete person.name; // nothing happens
console.log('Person name: ' + person.getName()); // The name is still there.
console.log('Person properties: ' + Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
