/* eslint-disable max-len */
'use strict';

// The weak map (in the variable private) is stored in a closure and not in a property
// in the person object.

const PersonConstr = (function() {
  const privateProps = new WeakMap(); // This is shared between all Person objects.

  /**
   * The Person constructor.
   * @param {String} name The name of the newly created Person.
   */
  function Person(name) {
    const privateProperties = {
      name: name,
    };
    privateProps.set(this, privateProperties);
  }

  Person.prototype.getName = function() {
    return privateProps.get(this).name;
  };

  return Person;
})();

const person = new PersonConstr('John');
console.log('Person name: ' + person.getName());
delete person.name; // nothing happens
console.log('Person name: ' + person.getName()); // The name is still there.
console.log('Person properties: ' + Object.getOwnPropertyNames(person));
