# Scope

The memory diagrams you've drawn probably have exposed the idea that not all _names_, such as Variables and Function names, are available to every line of code. There is a set of rules that will help you understand what is available where- this is known as **Scope**.

## Objectives

- Explain the three types of scope.
- Explain Hoisting, and when Hoisting occurs.
- Identify which scope data is stored in.

## What are the three types of scope?

A **scope** is a list of variable and function _names_ available for use on the current line of execution. There are three types of scope in JavaScript.

1. Global scope
2. Function scope
3. Block scope (✨new✨ in ES6)

## Global Scope

Any variable or function defined in the _global scope_ is available for use anywhere in the program. In the browser, the `window` global object refers to the global scope. The `window` object is a collection of variables and functions related to the current `window` of your browser. In a modern browser, every tab has its own global scope and, as a result, its own `window` object.


```javascript
console.log(window.document); // An object with properties on the window's DOM
console.log(window.location); // An object with properties on the window's URL
console.log(window.screen);   // An object with properties on the window's screen

var name = 'Mary';
console.log(window.name); //outputs 'Mary'
```

When you run your Javascript from your terminal, your global scope's name changes to `global`. Code you write for use in the browser and code you write for use from your terminal will have to use different variables, because each of these is a different _environment_. You have `window` available in the browser because you're actually executing code inside of another program, whose main interface is a window. When you type `node myFile.js` however, you don't launch a new window, you don't request a page, and you don't have an interface. You only have a running process, and you'll only see output if you've put in some lines of code that produce output, so the global object is simply called `global`.

```javascript
console.log(global.process) // An object with properties about the running process
console.log(global.console) // This is where the console object lives! Note that you can use it without the 'global' prefix- global is "assumed"
console.log(global.module) // An object that will help us export features from this script
console.log(global.require) // An object that can import features from another script

var name = 'Mary';
console.log(global.name); //outputs 'Mary'
```

### Hoisting
JavaScript has this "feature" called **hoisting**. It has to do with when variables actually come into existence, versus when they are actually assigned a value. These _can_ happen at different times.

When a *context* is created (when the `global`/`window` objects first come into existence, or when a function is invoked), the interpreter first finds all variables declared with the `var`, `let`, or `const` keywords inside of that context, and reserves space for them on the **stack**. Afterwards, the code is executed and values are assigned to these variables, but only on the actual line number where the assignment happens.

```javascript
function myFunction() {
  console.log(num);

  num = 2;

  console.log(num);

  var num = 1;

  console.log(num);
}

myFunction();
```

This code works, but it doesn't make _semantic sense_ to another programmer, so it's bad practice to actually write this kind of code. First, you can't make any assumptions that a JavaScript variable is global or will throw an `Unreferenced error` without first checking if it's declared somewhere inside a function, and functions can become quite long. For these reasons, we recommend declaring all variables at the top of a function, with the exception of variables used in `for` statements.

> ❗️ Remember, all declared variables start out as `undefined`, even if it's hoisted from way down in the function body.

```javascript
var array = [1, 2, 3, 4];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var element of iterable) {
  console.log(element);
}
```
The code above is fine, even though both `i` and `element` have space reserved for them long before they are assigned.

> It is a best practice in most of the JavaScript community that you declare variables at the beginning of the scope, rather than throughout. It is also best practice to keep variables _as locally scoped as possible_. Since variables in the global scope can be changed from anywhere, it's hard to reason about how these variables change over time as the program executes. Remember: Think globally, act locally.

Regardless of where variables are defined, they are always hoisted to the top of their scope. This is often described as a two step process: declaration and assignment. Lets look at a simple block of code, and examine how "hoisting" changes the code.

```javascript
console.log(myFirstFunction);
myFirstFunction();

console.log(mySecondFunction);
console.log(myFirstVariable);

function myFirstFunction() {
	console.log("firstFunction");
}

console.log("some filler statement");

var mySecondFunction = function() {
	console.log("secondFunction");
}

mySecondFunction();

var myFirstVariable = "50";

console.log(myFirstVariable);
console.log(unknownVariable);
```
Our console looks like this:

```js
[Function: myFirstFunction]
firstFunction
undefined
undefined
some filler statement
secondFunction
50
/Users/Tyler/Desktop/tmp.js:22
console.log(unknownVariable);
            ^

ReferenceError: unknownVariable is not defined
```

We were able to call `myFirstFunction` before it's function definition, but `mySecondFunction` was undefined at the same moment. If we tried to call `mySecondFucntion` instead of using `console.log` it would throw an error.

Not only that, but we were allowed to reference `myFirstVariable` before it's definition and it's value was undefined. The log statement after it's creation printed `50`! Finally, the `unknownVariable` threw an error even though `myFirstVariable` did not do the same thing prior to it's creation.

This is because of "Hoisting". When JavaScript enters a new scope, it preprocesses that scope in two stages.

#### Function Hoisting

First, function declarations are hoisted to the very top of the file. Function declarations are any statement that starts with the keyword function. `function myFirstFunction(){}` is such a declaration, but `var mySecondFunction = function(){}` is **not**. The second statement starts with the keyword `var`. When functions declarations are hoisted, their definition is **also** hoisted. This is in contrast to the second phrase of hoisting.

#### Variable Hoisting

After all the function declarations are hoisted, the variable **declaration** but not definition is hoisted. This means that any statement starting with the keyword `var` is at least partially hoisted. For example the statement `var myVariable;` is hoisted in it's entirety, but the statement `var myVariable = 50` is shortened to `var myVariable;` then hoisted. The value assignment statement changes to `myVariable = 50` and stays where it is. Let's look at what the the previous code would look like **after** hoisting has happened:

```js
// HOISTING SECTION ONE: Function Declarations pulled all the way up
function myFirstFunction() {
	console.log("firstFunction");
}

// HOISTING SECTION TWO: Variable Declarations pulled below section one
var mySecondFunction;
var myFirstVariable

// Now the rest of the code, post transform
console.log(myFirstFunction);
myFirstFunction();

console.log(mySecondFunction);
console.log(myFirstVariable);
console.log("some filler statement");

mySecondFunction = function() {
	console.log("secondFunction");
}

mySecondFunction();

myFirstVariable = "50";
console.log(myFirstVariable);
console.log(unknownVariable);
```

Note that running this code produces identical output to the code above -- that's because as far as JS is concerned, it IS the same code. Further note that all the `var` keywords have been removed from final section of the code. The declarations have been hoisted and so we do not need to declare them a second time.

The most important thing you could learn about hoisting, is that there is a significant difference between the following to statements:

```
function myFirstFunction() {};
var secondFucntion = function(){};
```

The first is a function which will be put onto global scope. The second is a variable whose value has been assigned to a function.

## Function Scope

When a function is invoked, an isolated function scope is created just for that invocation. Step through this code, and identify where Function Hoisting happens, where Variable Hoisting happens, and when a new Scope is created.

<iframe width="1024" height="600" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=var%20name%20%3D%20%22Global%22%3B%0Avar%20friendsName%20%3D%20%22Scopes%22%3B%0Avar%20bandName%20%3D%20name%20%2B%20%22%20and%20the%20%22%20%2B%20friendsName%3B%0A%0Afunction%20makeBandName%28name,%20friendsName%29%20%7B%0A%20%20var%20bandName%20%3D%20name%20%2B%20%22%20and%20the%20%22%20%2B%20friendsName%3B%0A%20%20return%20bandName%3B%0A%7D%0A%0Avar%20band1%20%3D%20makeBandName%28%22Statement%22,%20%22Semicolons%22%29%3B%0Avar%20band2%20%3D%20makeBandName%28%22Function%22,%20%22Stack%20Frames%22%29%3B&codeDivHeight=400&codeDivWidth=350&curInstr=0&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"> </iframe>

### Shadowing

It's possible to have two variables named the same thing, but on different scopes which is called *shadowing*. In JavaScript, the most local version of a variable is accessed by the interpreter first.

```javascript
var name = "Global";
var friendsName = "Scopes";
var bandName = name + " and the " + friendsName;

function makeBandName(name, friendsName) {
  var bandName = name + " and the " + friendsName;
  return bandName;
}

var band1 = makeBandName("Statement", "Semicolons");
var band2 = makeBandName("Function", "Stack Frames");
```

When you review this code, it isn't readily apparent when exactly the `name` variable is set inside the function, and you have to read and mentally evaluate the code in order to figure out when `name` is set. It's considered a bad habit to write code this way because it becomes very confusing, but it's good to know that writing it this way is perfectly legal.

### !challenge

* type: multiple-choice
* id: bbf8fe1f-1b05-43c7-92b6-c51db34fb91a
* title: Identify the Value

##### !question

### Question

Look at the code below, and identify the scope the variable appears in:

```js

var author = "Katherine Johnson";

function presentPaper (author, paperName) {
  return paperName + " by " + author;
}

console.log(presentPaper("Paul Stafford", "The Determination of Azimuth Angle at Burnout for Placing a Satellite over a Selected Earth Position"))

```

Which person appears as the author?

##### !end-question

##### !options


* "Katherine Johnson"
* "Paul Stafford"
* undefined


##### !end-options

##### !answer

"Paul Stafford"

##### !end-answer

##### !explanation

Correct, because of _shadowing_, the most local variable is considered first.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 2f29f572-1923-47ae-b70a-a1378a0f1909
* title: Identify the Scope

##### !question

### Question

```js
var earth = {
  population: 7000000000,
  atmosphere: {
    nitrogen: 78,
    oxygen: 21,
    argon: .9,
    carbon: .03
  },
  averageTemperature: function () {
    return carbon * 6100;
  }
}

function pollute() {
  earth.atmosphere.carbon += .000001;
}

```

Which scope does `earth`, when referenced in the `pollute` function live in?

##### !end-question

##### !options


* Global Scope
* Block Scope
* Local Function Scope


##### !end-options

##### !answer

Global Scope

##### !end-answer

##### !explanation

Right! `earth` was declared outside of the function scope, and no other `earth` is passed in through arguments, and it's not created inside the function. This means it's global.

##### !end-explanation

### !end-challenge

## Block Scope
If you haven't heard about or seen `let` and `const` variable declaration keywords, take a quick look at these articles on the Mozilla Developer Network:

- [`let` statement](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let)
- [`const` statement](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/const)

Let's look at this:

<iframe width="1024" height="600" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=var%20x%20%3D%20%22Global%22%3B%0A%0Afor%20%28let%20x%20%3D%200%3B%20x%20%3C%205%3B%20x%2B%2B%29%20%7B%0A%20%20console.log%28x%29%3B%0A%7D%0A%0Aconsole.log%28x%29%3B&codeDivHeight=400&codeDivWidth=350&curInstr=19&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"> </iframe>

As you can see as you step through the code, the first `x` variable lives on the global scope. When we write our `for` loop, we declare a new `x` variable with the statement `let x = 0;`. This **shadows** the first `x` variable because we're inside of a _block_. Anytime you enclose some statements inside of curly brackets (`if`, `for`, `while`, `switch`, etc) you're creating a **Block**.

Not only is it more memory efficient to create variables that are only allocated space when they're useful, but it communicates well with other developers where a given variable will be relevant. Here's an example of printing each color :

<iframe width="1024" height="600" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=var%20rainbow%20%3D%20%5B%22red%22,%20%22orange%22,%20%22yellow%22,%20%22green%22,%20%22blue%22,%20%22indigo%22,%20%22violet%22%5D%3B%0A%0Afor%20%28let%20i%3D0%3B%20i%3Crainbow.length%3B%20i%2B%2B%29%20%7B%0A%20%20let%20color%20%3D%20rainbow%5Bi%5D%3B%0A%20%20color%20%3D%20color%5B0%5D.toUpperCase%28%29%20%2B%20color.slice%281%29%3B%0A%20%20console.log%28color%29%3B%0A%7D&codeDivHeight=400&codeDivWidth=350&curInstr=0&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D"> </iframe>

As you can see, the `color` variable is simply created as a shorthand way to reference the current iteration over the array `rainbow`. We also change the string, but we can't alter the original array due to it's declaration as `const`, so having a short-lived space for doing short-lived changes to data is best accomplished by using `let`, and the magic of **Block Scope**.

## Outside Resources

- [JavaScript Scope Chains and Closures](https://www.youtube.com/watch?v=zRZNb4GDOPI)
- [Everything You Wanted to Know About JavaScript scope](http://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/)