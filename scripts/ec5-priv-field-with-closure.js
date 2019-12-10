'use strict';

/* eslint-disable max-len */
// A private property is faked by making the getName function a closure. The name is never stored in a property.

/**
 * Creates constructor and functions of the Person object.
 */
const PersonConstr = (function() {
  /**
   * The Person constructor.
   * @param {String} name The name of the newly created Person.
   */
  function Person(name) {
    this.getName = function() {
      return name;
    };
  }

  return Person;
})();

const person = new PersonConstr('John');
console.log('Person name: ' + person.getName());
delete person.name; // Nothing happens.
console.log('Person name: ' + person.getName()); // The name is still there.
