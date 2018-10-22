/*
 In javascript functions can be used like any other data type.
 We can save functions into variables, pass them as parameters,
 and return them from functions.

 When functions are used this way, they are called "higher order
 functions". Lets look at some examples of this:
*/

function returnFunction() {
    // Its common to return anonymous functions.
    // We do this if we only want to be able
    // to call this function after returnFunction has
    // returned it.
    return function() {
        console.log("Hurrah, you've done it!");
    }
}

// Write 1-3 lines of code that will cause the statement on line 16
// to execute:

// YOUR CODE HERE!

// Below is another kind of "Higer Order Function". This function
// expects the parameter to be a function, then it calls this
// passed in function. The passed in function is commonly called
// a "callback" function.
function noCallaBackGirl(callbackFunction) {
    console.log(callbackFunction());
}

// Write some code which causes line 30 to print:
// "Gwen Stefani 4 lyfe"

// YOUR CODE HERE
// HINT: You will have to define a function, and pass it as a parameter...
