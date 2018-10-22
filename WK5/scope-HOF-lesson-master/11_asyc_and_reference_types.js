// Use what you know about scope, reference types, and Higher Order Functions to
// predict the output of this code. Draw stack heap diagrams to help anchor your
// understanding. Predicting the output will require you to mentally walk through
// the code -- I suggest keeping a stack/heap/queue diagram on a mini-whiteboard
// as you work through this with your pair.

// After you've made a prediction, test yourself. If you were not correct, try
// stepping through this code in a debugger, and talking it through with an instructor!

// If you can describe how this code executes, you have a strong understanding of
// code execution order in JavaScript. This is an absolutely critical skill for
// any software engineer.

// CRUCIAL!!!! Predicit the output BEFORE you run this code, otherwise you are not
// testing your own knowledge.
var glob;

function startTimers(array) {
  glob = array;

  for(let i = 0; i < 10; i++) {
    array.push(i);

    setTimeout(() => {
        array.push(i);
      }, i * 1000);
  }
}

if(true) {
  let array = []
  startTimers(array);
}

console.log(glob); // What will this print? Why?
