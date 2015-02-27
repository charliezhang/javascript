var util = require('util');

function f1(a) {
  return a * a;
}

// call function by name
console.log(eval("f1")(3));

// When defining a function, it is also a constructor.
// Function starts with capitalized letter, meant to be constructor
function Answer(a, b, c) { 
  return a + b - c;
}

// Function is an object
console.log(Answer.name);
console.log(Answer.length);

// Function has prototype object, whose constructor is the function itself.
console.log(util.inspect(Answer.prototype.constructor));


console.log(
    "===============================\n" +
    "Define class in prototypal model.\n" + 
    "===============================");
var AnswerPrototype = {
  constructor: function fn0 (val) { // starts with lower case, meant to be function
    this._val = val;
  },

  get: function fn1 () {
    return this._val;  
  }
};

var lifeAnswer =  Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
console.log(lifeAnswer.get());

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
console.log(dessertAnswer.get());

console.log(
    "===============================\n" +
    "Inheritance in prototypal model.\n" + 
    "===============================");

var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
  return AnswerPrototype.get.call(this) + "!!";
};

var luckyAnswer = Object.create(FirmAnswerPrototype);
luckyAnswer.constructor(7);
console.log(luckyAnswer.get());

console.log(
    "===============================\n" +
    "Define class in classical model with new keyword.\n" +
    "===============================");
function Answer(value) {
  this._val = value
}

Answer.prototype.get = function fn1 () {
  return this._val;
}

var lifeAnswer = new Answer(42);
console.log(lifeAnswer.get());

// Gets the class name of lifeAnswer.
console.log(lifeAnswer.constructor.name);
console.log(lifeAnswer instanceof Answer);

var dessertAnswer = new Answer(3.14);
console.log(dessertAnswer.get());

console.log(
    "===============================\n" +
    "Inheritance in classical model.\n" + 
    "===============================");
function FirmAnswer(value) {
  Answer.call(this, value);
}
FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
  return Answer.prototype.get.call(this) + "!!";
}

var luckyAnswer = new FirmAnswer(7);
console.log(luckyAnswer.get());

console.log(
    "===============================\n" +
    "Instance of.\n" + 
    "===============================");
// Instance of checks the __proto__ chain of the former and compare to the prototype property of the second.
console.log(lifeAnswer instanceof Answer);
console.log(lifeAnswer.__proto__);
console.log(Answer.prototype);
console.log(Answer.prototype == lifeAnswer.__proto__);

console.log(luckyAnswer.__proto__ == FirmAnswer.prototype);
console.log(luckyAnswer.__proto__.__proto__ == Answer.prototype);
/*
class FirmAnswer extends Answer {
  constructor(value) {
    super(value);
  }

  get() {
    return super() + "!!";
  }
};
*/

