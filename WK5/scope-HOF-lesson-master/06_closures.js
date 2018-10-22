/*
 When we use "higher order functions" the variables that exist
 in their "enclosing scope" are captured. The variables that are saved are
 said to be "closed over". Somtimes these "closed over" variables are called
 "the environment" for the inner function.

 Lets see an example of this:
*/

// What variable is "closed over" in the following code?
function enclosingFunction() {
    var counter = 0;

    return function() {
        counter += 1;
        console.log(counter);
    }
}

// What is the data-type of the variable 'closure' here?
var closure = enclosingFunction();

// What will log on these lines?
closure();
closure();
closure();
closure();
console.log("==========")

// What about these?
var closureTwo = enclosingFunction();
closureTwo();
closureTwo();
closureTwo();
closureTwo();

// Does that result surprise you? Does it make sense? Discuss with
// your partner why this happens.

// Step through this code in a debugger. 
