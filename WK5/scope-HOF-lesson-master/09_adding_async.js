/*
  One common application of "higher order functions" is
  for asychronous code. We're using setTimeout for simplicity
  below, but this same behavior takes place with: AJAX calls,
  DOM Events, data-base access with Knex, and many more places.

  In javascript we can use a function called
  setTimeout to execute a function after some time has passed.

  https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout

  We specify what should happen after some time has passed by using a specific
  kind of Higher Order Function called a "callback function"
*/

// Consider this callback function, and the use of setTimeout below.
function callMeLater(whichTime) {
    console.log("You've been called.");
    console.log("The value of i is: " + i);
    console.log("The value of whichTime is: " + whichTime);
    console.log("================");
}

for(var i = 0; i < 10; i++) {
    setTimeout(callMeLater, i * 1000, i);
}

// Why is i always 10 inside of the callMeLater function?
// How does "whichTime" get passed into this function?
// What scope is the variable i in?
// What about the variable whichTime?
// Draw a stack, heap diagram, and this time add the "event queue" to your drawing.

// What happens if you change "var i" to be "let i"?
  // What scope is it in now?
