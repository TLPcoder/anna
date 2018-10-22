/*
  Scopes and Reference types are related concepts. In JavaScript,
  there are two main types of variable: primative types and reference types.

  These two styles of variable are shared by many programming languages.
  Lets see an example of how primatives and reference types behave differently:
*/

var x = 1;
var y = 1;
console.log(x === y); // True or false?

var arrayOne = [];
var arrayTwo = [];
console.log(arrayOne === arrayTwo); // True or false?
// Draw a stack/heap diagram that illustrates what is happening in this example.

/*
  Changes made to reference type variables will apply to
  every copy of the reference. Consider this:
*/
var a = [];
var b = a;
var c = b;
a.push(1);
console.log(b); // What will this log?
console.log(c); // What will this log?
console.log(a === c); // What will this log?
// How is this different from the example with arrayOne and arrayTwo?
// Why is this the case?
// Draw a stack heap diagram of this example executing
