'use strict';

/**
 * Creates constructor and functions of the Person object.
 */
const PersonConstr = (function() {
  /**
   * The Person constructor.
   * @param {String} name The name of the newly created Person.
   */
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function() {
    return this.name;
  };

  return Person;
})();

const person = new PersonConstr('John');
console.log(PersonConstr);
console.log(person);
console.log('Person name: ' + person.getName());
delete person.name; // The name property is deleted
console.log('Person name: ' + person.getName()); // There is no name now.

// Could also be written like this, which gives exactly the same result:
/**
 * The OtherPerson constructor.
 * @param {String} name The name of the newly created OtherPerson.
 */
function OtherPerson(name) {
  this.name = name;
}

OtherPerson.prototype.getName = function() {
  return this.name;
};

const otherPerson = new OtherPerson('John');
console.log(OtherPerson);
console.log(otherPerson);
console.log('otherPerson name: ' + otherPerson.getName());
