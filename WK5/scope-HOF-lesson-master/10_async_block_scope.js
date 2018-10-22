/*
  This code is very similar to the code from the previous worksheet. What has changed?
*/

function startTimers() {
  for(var i = 0; i < 10; i++) {
      setTimeout((whichTime) => {
          console.log("You've been called.");
          console.log(`The value of i is: ${i}`);
          console.log(`The value of whichTime is: ${whichTime}`)
          console.log("================");
      }, i * 1000, i);
  }
}

startTimers()
// Will i still always be 10 inside of the callMeLater function?
// What scope is the variable i in now?
// What about the variable whichTime, has it changed?
// Draw a stack, heap diagram, and this time add the "event queue" to your drawing.

// What happens if you change "var i" to be "let i" this time?
  // What scope is it in now?
  // This time the result is very different from changing var to let in the previous example...
  // Can you explain why?
  // Try reading this if you are confused:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
