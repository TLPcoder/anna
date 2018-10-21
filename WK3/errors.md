# Error Handling In JavaScript

## Objectives

This article is about Errors in JavaScript. Specifically, this article is designed to help you:

* Identify when __Errors__ are __thrown__.
* Articulate the reason why JavaScript needs __Errors__.
* Use __try/catch__ blocks.
* Write your own custom __Errors__.
* Read stack traces to find out where an __Error__ is being __thrown__.

> ⌨️ During this lesson, follow along by opening up your IDE and your Terminal, or your Console in your Browser. When directed, follow the prompts and walk through the errors.

## Key Terms

* SyntaxError
* ReferenceError
* TypeError
* RangeError

## Errors

In learning JavaScript, it's safe to say you've probably encountered Errors. Errors are problems with the code - sometimes because of the way the code is written, sometimes because of the input, sometimes because of a mistake in how you typed the code (which was probably the first Error you encountered). Errors are a natural part of programming.

You will encounter Errors throughout your career- sometimes even purposefully throwing errors to handle certain conditions. Let's first go over some of the times when you'll see an Error.

### Errors in Syntax - Your First Errors

When you were first typing your first programming language, it's likely you mistyped some of your input, or didn't fully understand the need for certain characters. These types of errors are perhaps the most fundamental errors you can make in any programming language.  Here's an example:

```

if (myVar = 2 {
myvar++


```

The above code won't work, obviously. There are tons of problems - the `if` statement's parenthesis aren't closed, we're using the assignment operator instead of the comparison operator, and we're trying to increment a variable that is spelled the same but with different capitalization, so we'll try to increment the value `undefined`, which as you've probably gathered will throw an error.

Try running this code by putting it in a file and using the command line to execute that file. You can do this by running `node errors.js` (provided that's what you named the file). Observe what types of Errors you get. Fix the code one step at a time, and observe how the errors change.

The first time, you should receive something like this:

```
/tmp/errors.js:1
(function (exports, require, module, __filename, __dirname) { if (myVar = 2 {
                                                                            ^
SyntaxError: Unexpected token {
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:509:3

```

This is called a _stack trace_. This shows us the path our code took, and tells you the most recent line that ran before it ran into an error.

> ⚠️ ⚠️ It is **critical** that you **read the output** of your program, **especially** if it contains an error. You cannot ever **hope** to understand programming until you understand how to read the errors produced. It can't be overstated. Learn to **read** the output. ⚠️ ⚠️

**[`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)s** will try to explain where the JavaScript interpreter first became confused. The third line of the stack trace above tells you that this is a SyntaxError. The first line will tell you the file the interpreter got stuck on, followed by a `:` character, followed by the line number it got stuck on. The third line of the stack trace points to the specific character that confused the interpreter. That doesn't mean that that character is directly responsible for the SyntaxError, it simply points to the first discrepancy the interpreter noticed. In the example above the first curly brace is indicated by the pointer - the fact that there is a curly brace there isn't actually the problem. The problem is the lack of a matching parenthesis from the beginning of the `if` statement. Fix that issue, then look at the next error you get.

```
/tmp/errors.js:4
});
 ^
SyntaxError: Unexpected token )
    at Object.exports.runInThisContext (vm.js:76:16)
    at Module._compile (module.js:542:28)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:509:3
```

This error tells us that we have a SyntaxError- but it indicates a line that doesn't exist in our file- it only has 3 lines in total. That means we know what _kind_ of error but we don't know _where_. Typically, this means we forgot to close a curly brace or parenthesis somewhere. Fix the missing character, then take a look at the next error.

```
/tmp/errors.js:2
  myvar++
  ^

ReferenceError: myvar is not defined
    at Object.<anonymous> (/Users/lizthedeveloper/src/curriculum/tmp/errors.js:2:3)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
    at Module.runMain (module.js:604:10)
    at run (bootstrap_node.js:394:7)
    at startup (bootstrap_node.js:149:9)
    at bootstrap_node.js:509:3
```

The line number in this instance is useful, because it points to a line that actually exists. We also have gotten a different type of error: **[`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)**. This error most commonly happens when you've spelled a variable name incorrectly, or neglected to use the right capitalization. JavaScript variable names are case sensitive, and trying to operate on an undeclared variable will result in this error.

Here is another example:

```js
console.log(nonExistent);
```

This time, we see `ReferenceError: nonExistent is not defined`. Here, we have asked the computer to print the value of `nonExistent` to our terminal, but a variable named `nonExistent` doesn't appear anywhere in the program. `nonExistent` is not in a local scope or in the global scope. After searching through the namespace for `nonExistent` JavaScript gives up and tells us we can only print things which exist in the form of a [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError).


### Errors in Input - Impossible Requests

Occasionally a computer program encounters an impossible situation. This typically happens when a programmer makes an "unreasonable" request. Here's an example:

```js
function run() {
  var arr = new Array(-1);
}

run();
```

The parameter for the Array constructor is supposed to be the size of the array; that line of code is asking for an array that can hold -1 items. This is clearly an unreasonable request. If we run this code in the console, we get a message like this:

`RangeError: Invalid array length`

The Array constructor is telling us that `-1` is not an acceptable value for array size. This [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) was thrown because we asked the computer to do something that doesn't make sense. Instead of continuing, JavaScript tells us that we have asked for the impossible by __throwing__ a RangeError.

Hopefully the above is enough to illustrate that some requests simply cannot be serviced. When programmers make an impossible request of the computer, we say that an __error is thrown__.

Modern computers and programming languages, powerful as they are, have limitations. These limitations often come to us in the form of Errors.

## Try / Catch / Finally

In JavaScript (and many other programming languages) the default behavior is to terminate the program entirely when an error is thrown. Many times this makes sense. For example, perhaps we're not finished with our program yet. In this case an Error is thrown when we run our code, we realize we've made a mistake, fix it and repeat the process.

Other times, terminating the entire process is a bit too extreme. Imagine for example, a user submits an invalid email address to our webserver, for example "iAintPayin". Our webserver attempts to send an email but an error is thrown because an email can't be sent to a name without a domain (`@gmail.com`, for example). Should the whole webserver really crash?

A more reasonable option would be to ignore the fake email address and continue with business as usual. To facilitate this kind of behavior, we use a **[`try/catch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)** block. Consider the following:

```js
function run() {
  try {
    var arr = new Array(-1); // Throws RangeError
  } catch (err) {
    console.log(err); // err IS the RangeError
  }

  console.log('But this time, my program stays alive!');
}

run();
```

When we try to create an impossible Array, the `RangeError` is still thrown, but this time it is __caught__ because it was thrown inside of the __try block__. When we catch an error, we're saying "I know it's possible for something to go wrong - but I want to continue anyway."

Sometimes we'll write special code that helps us recover from an error. Other times we'll simply log that an error occurred, and continue on as usual. We can also add a `finally` statement to any try/catch block:


```js
function run() {
  try {
    var arr = new Array(-1); // Throws RangeError
  } catch (err) {
    console.log(err); // This IS the RangeError
  } finally {
    return [];
  }

  console.log('My program returns before this because of finally!');
}

console.log(run()); // returns an empty array
```

The statements inside of the `finally` block will __always__ run. If the statements in `try` complete without throwing an error, then the `finally` block executes directly after the last statement in the `try` block. If an Error is thrown during the `try` block, the `catch` block triggers as usual, then the finally block executes following the last statement in the `catch` block.

## Custom Errors

Creating a custom error is a fantastic way to communicate with other programmers who might be using our code. Take a look at this example:

```js
function sum() {
    var sum = 0;
    for(var i in arguments) {
        var curNum = arguments[i];

        if(typeof curNum !== 'number') {
            throw new TypeError("Cannot compute sum for value: " +
                curNum + ". It's data-type should be number but was: " +
                typeof curNum);
        }

        sum += curNum;
    }

    return sum;
}

sum(1, 2, 3, 4, 5, 6, "grape");
```

Try running this code in a terminal. The result:

```
TypeError: Cannot compute sum for value: grape.
It's data-type should be number but was: string
```

In this example, when we passed in the string `"grape"` to a function which expected only numbers an error was thrown. It's very easy to understand why - we sent a string to a function expecting a number. Not only that, but the error message tells us the unexpected value was `"grape"`.

If this is your first time digging into Errors, there might be two new concepts:

`new TypeError()` and the `throw` keyword.

Errors are like any other constructor in JavaScript, we can invoke them with the `new` keyword. The constructor accepts a message for our Error, and the Error object is created. JavaScript uses inheritance to get special properties of the error, like the stack trace.

The `throw` keyword is used to trigger the error. Like `return`, `throw` halts the current function's execution immediately. Unlike `return` though, `throw` propagates up the call stack until it is `caught` or it reaches the very top of the call stack, at which point the program would halt completely. This is where the term _stack trace_ comes from.

### Silent Errors

There is one more kind of error in our `errors.js` code example- one that won't throw an error. **Just because your code will run without crashing doesn't mean it's correct**. Let's suppose the goal of our code was to get the value of `myVar` to `3`, but only if it's value starts at `2`. Add a line to the top of `errors.js`, `var myVar = 1;`. Then, console.log the value of `myVar` on the last line, then run your code.

Our code will output `3`, which is wrong because `myVar` starts at `1`. This is because the assignment operator will return the assigned value- in this case, that's `2`. `2` will be coerced into a truthy value, so the `if` statement will run, causing our variable to increment when it shouldn't. Fix the error by changing the assignment operator to a comparison operator, and you should get the correct result, `1`.