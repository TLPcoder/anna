/*
 We know that functions can access outer scopes. Consider
 these next two examples:
*/
var newGlobal = "Original Value";

// Can you identify any "name collisions"?
// How many unique variables are there named "newGlobal"?
function shadowOne(newGlobal) {
    var localOne = "Value from shadowOne";
    newGlobal = localOne;
}

function shadowTwo() {
    var localOne = "Value from shadowTwo";
    var newGlobal = localOne;
}

// Predict the output of each of the console.log statements below:
shadowOne(newGlobal);
console.log(`newGlobal after shadowOne: ${newGlobal}`);

shadowTwo();
console.log(`newGlobal after shadowTwo: ${newGlobal}`);

// In javascript, name collisions result in the
// "most local" version of the variable being used.
// Consider this more extreme example:
function outer() {
    var newGlobal = "outer";

    function mid() {
        var newGlobal = "mid";

        function inner() {
            var newGlobal = "inner";

            if(true){
              let newGlobal = "inner block"
              console.log(newGlobal)
            }

            console.log(newGlobal);
        }

        inner();
    }

    mid();
}

outer(); // What will log as a result of this function call?

// Draw a diagram of "The Stack" as these functions execute.
// Run this script file with the following command to step through execution, was your diagram accurate?
// node --inspeect --debug-brk p3_shadow.js
