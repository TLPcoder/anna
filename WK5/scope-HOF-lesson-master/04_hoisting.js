/*
  In JavaScript, hoisting is a pre-processing step that
  happens anytime a function or script begins executing.

  Read this code with your partner and write down a guess
  for what will happen at each step.
*/

console.log(declaration()); // What happens?
function declaration() {
    return "declaration ran"
}
console.log(declaration()); // What happens?

console.log(variable); // What happens?
var variable = 12;
console.log(variable); // What happens?

/*
 Hoisting applies to lines that start with the var keyword
 and also to lines that start with the function keyword.

 function declarations are "hoisted" complete with definition - which is why
 line 9 and 11 behave identically. The function was "hoisted" to
 the very top of the current scope.

 variables are "hoisted" as well, but only the name is hoisted, not the
 assignment statement. This is why line 15 printed undefined, but
 line 17 printed 12. Variables declared with var are hoisted to their nearest
 local scope, variables declared with let or const are hoisted to their nearnest
 block scope.

 With that in mind, which version of hosting applies to this?
 How might you prove it?
*/
var functionExpression = function() {
    console.log("aFunction was executed");
}

/*
  Write a function that demonstrates that variables declared with let
  and var are "hoisted" very differently... see: https://rainsoft.io/variables-lifecycle-and-why-let-is-not-hoisted/
*/
function useBlockHoisting() {

}
