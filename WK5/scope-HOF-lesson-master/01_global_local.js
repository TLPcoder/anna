/* In JavaScript there are 3 kinds of scope:
 *   global, local, and block
 */

// Why are these two variables considered global?
// What is global scope"?
var globalOne = "This variable is in 'global' scope";
var globalTwo = "This is also in global scope";

hasOuterScope();
function hasOuterScope() {
    console.log(`${globalOne}`); // What will this print?
}

// This function contains a local variable.
function doesNotLeakVariables() {
    var localOne = 42;
}

// Decide with a teammate what will happen when this
// line is uncommented and executed, then try it!
// var newGlobal = localOne;

// What happened? Did you guess correctly?
// Inner scopes are invisible to outer scopes!

// The term "local scope" always applies to functions.
// The third kind of scope is called "block scope".
// Block scope behaves just like local scope, but for
// ANY set of curly braces not just the ones for
// a function's body. Contrast these two examples:

for(var x = 0; x < 10; x++) {
    // Do nothing, we care about x
}
console.log(x); // What will print?

for(let i = 0; i < 10; i++) {
    // Do nothing, we care about i
}
console.log(i) // What will print?

// Lets put it together... what scope are the following variables in?
// parameter: ?
// a: ?
// b: ?
// c: ?
// d: ?
function scopesEverywhere(parameter){
  var a = 10;
  let b = 20;

  if(a < b) {
    var c = a + b;
    let d = c + b;
  }

  // Can you write some code that throws a ReferenceError using any of a, b, c, or d?
  // Which ones can't you use to create a ReferenceError?
    // Why not?
}

/*
  What is a "ReferenceError"?
    The ReferenceError object represents an error when
    a non-existent variable is referenced.

  For more details:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
 */
