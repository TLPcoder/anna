/*
  A very common source of errors in programming is a style of error called a
  "side effect". A function can be said to have a "side effect" if it changes
  the value of a passed in reference type.

  * Which of the following functions have "side effects"?
  * Describe the side effect.
  * Write some code which illustrates the existence or lack of existince of a
    side effect for each function.
  * Draw a stack heap diagram for the execution of each example.

  Challenge yourself to identify the different scopes, any higher order functions,
  any closures, and the effects of hoisting as you look through these examples.
*/

function getLast(array) {
  return array.pop()
}

function getFirst(array) {
  return array[0];
}

function assignNewValue(array) {
  array = []
}

function assignInnerValue(array) {
  array[0] = 10;
}

function sum(array) {
  return array.reduce(function(accum, currentValue) {
    return accum + currentValue;
  });
}

function iterateAssignHigherOrder(array){
  array.forEach(function(item) {
    item = 0;
  });
}

function iterateAssignForLoop(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] = i;
  }
}
