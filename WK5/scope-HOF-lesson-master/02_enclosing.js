// In programming, scopes can access other scopes, but there are rules for
// which scopes a program can access from the current scope.

// With reference errors in mind, predict what will happen
// when lines 7 and 8 are executed.
var notDefined;
console.log("notDefined: " + notDefined);  // What happens?
console.log("nonExistent: " + nonExistent); // What happens?
// Comment out the line that causes an error to continue.

// Lets revisit the code from part 1, with a twist:
var newGlobal;

function accessOuterScope() {
    var localOne = 42;
    newGlobal = localOne;
}

accessOuterScope();
console.log("newGlobal: " + newGlobal); // What will print here?

// All scopes can access any of their "enclosing" scopes.
// How many unique scopes exist in this function?
// Can you draw a picture that explains which variable can be accessed from which scope?
// Before you execute this code, can you predict what will be console.log'd and in what order?
  // Try drawing the stack/heap diagram for this function's execution!
outer()
function outer() {
  inner("First Call");

  for(var i = 0; i < 10; i++) {
    console.log(i);
  }

  inner("Second Call");

  function inner(parameter) {
    if(i){
      console.log(parameter)
    }
  }
}
