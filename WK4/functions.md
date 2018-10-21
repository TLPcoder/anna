# An Introduction to Functions with JavaScript

Functions are a tool we use to encapsulate code for later reuse. Much like a variable can contain _data_, functions contain _code_.

Functions are a foundational concept in programming. Functions are available in every language you're likely to interact with, though their syntax and sometimes behavior change from language to language. You'll encounter them throughout this course, and you'll write functions for the rest of your career.

## Objectives

- Explain the purpose and function of a Function
- Write Functions
- Write Functions with 0, 1, and 2+ parameters
- Invoke Functions as Expressions

### Key Terms

- Function
- Parameter
- Invoke
- Argument

### What's a Function?

In one sentence, we can say that a **function** is a reusable block of code. A good real-world analogue would be a recipe.

Functions have names, much like recipes - when you tell someone to make you a pumpkin pie, you are really telling them to execute a sequence of small steps in a specific order, in order to return to you a pumpkin pie. When you tell someone to make 5 pumpkin pies, you have changed the input, but the sequence of steps is the same. The input to a function when a function is run is called an **argument**. Inside the function, inputs are called **parameters**. The sequence of steps is called the *function body*.

### The Syntax of a Function

The way we create functions in the real world is different from how we create functions in JavaScript. In the real world, a recipe has a series of bullet points with instructions. In order to create functions in JavaScript, we need to use a particular syntax:

```javascript
function name ( parameter, parameters ) {
  //body (i.e., statements, expressions, values)
}
```

There are four parts to the above code example:

1. Keyword `function`
1. Name for that function
1. Parameters - a comma separated list enclosed in parenthesis
1. Instructions - a variable number of optional instructions enclosed in curly braces

###  Function Creation

Given the above the syntax of a function. Let's apply this technique to create a function named `greet()`, which will log to the console the string `"Hello, World!"`:

```javascript
function greet() {
  console.log("Hello, World!");
}
```

> 💻 Time to practice! Each time you see a code snippet, run that code in either your `node` console, or use an online tool like [REPL.it](http://repl.it/languages/javascript). This will help you recall these concepts later.

This function is very much like a variable, in that it's a *name* with a *value*. The value of the name is the entire function declaration. If we want to see the value of our function, we can print it to the console the same way we do with any other variable- input the name of the function to our REPL, or call `console.log(greet)`:

```javascript
function greet() {
  console.log("Hello, World!");
}

greet
```

Will output:

```javascript
// function greet() {
//  console.log("Hello, World!");
// }
// undefined
```

Now some of you may be confused. You may have have imagined `"Hello, World!"` logged to our console- not the definition of the function. If I'm describing you, then you've got great intuition. When working with functions, there are two steps: creating and **invoking**. What you imagined reading (`"Hello, World!"`) happens during the *invocation* step of a function.

### Function Invocation

To this point, we've just created a recipe for `greet`, we haven't actually told anyone or anything to execute the instructions in our function.

To execute the code inside our curly braces, we need to use an operator of `()` next to the name of our function:

```javascript
function greet() {
  console.log("Hello, World!");
}

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined

greet();
// "Hello, World!"
// undefined
```

That's it! Now we can re-use the instructions of `greet` whenever we want. Above, we just *invoked* it 3 times.

### !challenge

* type: code-snippet
* language: javascript
* id: 7eeb9379-5423-4b3f-bb2a-bd9d58d00af5
* title: First Functions

### !question

Time to write your own function. Write a function that is called "sayMyName". Inside, write a `console.log()` statement that says "My name is Ada", but use your own name.

### !end-question

### !placeholder

Write your function here...

### !end-placeholder

### !tests

```js

require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('sayMyName', function() {

    beforeEach(stubFn);

    it("Has a function called sayMyName", function() {
      expect(sayMyName(), "Did you name the function 'sayMyName'?").to.eq(undefined);
    })

    it("Calls console.log() with 'My name is [your name here]'", function() {
      sayMyName();
      expect(console.log.getCall(0).args[0]).to.match(/[mM]y name is (.+)/);
    })

})
```
### !end-tests

### !explanation

Congratulations! you've written your first function!

### !end-explanation

### !end-challenge

### The keyword `return`

You may have noticed that when we invoked `greet()`, the console logged the value `undefined`. This points to an important part of how functions are designed. Every function **returns** a value. If you do not specify a `return` statement, then it will return `undefined`.

Logging is similar to a chef following a recipe and shouting when he executes one of the steps of the recipe; moreover, a chef yelling each step isn’t the same as a chef creating our meal and then returning a meal to us. Imagine you order a dish and you can hear the chef calling out each step, but no one ever gives you the dish.

If you want to add instructions on what a function should return, you'll need to use the keyword `return`. Return looks like this:

```javascript
function greet() {
  console.log("Hello, World!");
  return "You told me to return.";
}

greet()
// The console will print:
// "Hello, World!"
// "You told me to return." - This is where undefined was
```

The keyword `return`, followed by _any valid [JavaScript Expression](./01_Variables_and_DataTypes.md)_. You can have a string, as above, or you can add numbers, a series of numbers and operators (`2 + 7 / 3`) or even `null`.

Take note that `return` has special behavior associated with it. The most notable is that once a function executes a `return` statement, all code succeeding it in a function never gets executed. In other words, be careful where and when you use `return`:

```javascript
function greet() {
  return "You'll never reach the console.log() message.";
  console.log("Hello, World!");
}

greet();
// "You'll never reach the console.log() message."
```

```js
function twoReturns() {
  return "I'm the only return that gets executed";
  return "You told me to return.";
  console.log("Hello, World!");
}

twoReturns()
// "I'm the only return that gets executed";
```

### Parameters and Arguments

So far, we've learned how to re-use code with the aid of functions. We can define a function once, and then invoke it many times. However, during each invocation, we execute the same code with the same static values--the output never changes.

This outcome is analogous to a website that greets every user whom logs into a site with the the following greeting: "Hello, user." How generic; how static! The value of that greeting would be infinitely better if every user could be greeted with their name- "Hello, Danny." To add this behavior to our code, we can include parameters and arguments to our functions.

#### Parameters

When we define a function, we can create variables that are local to a function and assigned during invocation. These specific variables are called parameters:

```javascript
function greet(name) {
  return "Hello, " + name;
}
```

Let's view what happens when we now invoke `greet`:

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet();
// "Hello, undefined"
```

Hmmmm... Not quite what we wanted. We'll need arguments to assign values to our parameters.

#### Arguments

To dynamically assign a value to `name`, we need to pass a value to `greet()` during invocation. An argument is passed by putting a variable or value in an invocation's parenthesis. The position of this argument will correspond with the position of the parameter. We'll write some example code to make this process clearer:

```javascript
function greet(name) {
  return "Hello, " + name;
}

greet("Grace Hopper");
// "Hello, Grace Hopper"
```

`"Grace Hopper"` is the first argument passed when invoking `greet()`. During invocation, `"Grace Hopper"` is assigned to the first parameter of `greet()`, `name`.



### !challenge

* type: code-snippet
* language: javascript
* id: 644a12cc-9ac0-49b3-b86c-007bf30c9c0d
* title: Parameterizing Functions

### !question

Recall your `sayMyName` function from before. It should say "My name is Ada", but with your name. It can currently only say _your_ name though. Let's upgrade it to allow it to say anyone's name, and let's have it `return` instead of logging.

* Add a parameter to your function to allow it to use anyone's name
* Use string concatenation to append the name to the string `"My name is "`.
* `return` the new string.

### !end-question

### !placeholder

Write your function here...

### !end-placeholder

### !tests

```js
describe('sayMyName', function() {

    it("Takes in a name parameter and returns the correct value", function() {
      expect(sayMyName("Ada")).to.eq("My name is Ada")
      expect(sayMyName("Alan")).to.eq("My name is Alan")
    })

})
```
### !end-tests

### !explanation

Great! You can write a function with parameters, and return values!

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 7e5312b3-ae7c-460d-92a1-ae1117136bc5
* title: Multiple Parameters

### !question

We're going to write a function that takes multiple parameters. One for your name, and one for your title.

* Write a function called `formalGreeting` that takes two parameters.
* The first parameter should be a string, `name`
* The next parameter should be a string, `title`
* `return` a string that is formatted like so: `"My name is Rear Admiral Grace Hopper"`

### !end-question

### !placeholder

Write your function here...

### !end-placeholder

### !tests

```js
describe('formalGreeting', function() {

    it("returns a formal greeting ", function() {
      expect(formalGreeting("Grace Hopper", "Rear Admiral"), "Doesn't return the correct value").to.eq("My name is Rear Admiral Grace Hopper");
      expect(formalGreeting("Ada Lovelace", "Countess"), "Doesn't return the correct value").to.eq("My name is Countess Ada Lovelace");
    })

})
```
### !end-tests

### !explanation

Great! You can write functions with more than one parameter, and return values composed of multiple operations!

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 8669a9af-9aa5-466e-a723-61ce19a932e3
* title: two params function

### !question

Time to write a function with a little more complex behavior.

* Write a function called `whichIsLonger`
* It should accept two strings
* `return` the longer of the two strings.
* If the strings are the same length, return the first string.

### !end-question

### !placeholder

function whichIsLonger(first, second) {
  // your code here...
}

whichIsLonger('Mel', 'Jill');
// 'Jill'

whichIsLonger('abcd', 'abcdefg');
// 'abcdefg'

whichIsLonger('abcd', 'efgh');
// 'abcd'

### !end-placeholder

### !tests

```js
describe('whichIsLonger', function() {

    it("returns the longer of two strings", function() {
      expect(whichIsLonger("aa", "bbbbbb")).to.eq("bbbbbb");
      expect(whichIsLonger("aaaaaa", "bb")).to.eq("aaaaaa");
    })
    it("returns the first string when the two strings are the same length", function() {
      expect(whichIsLonger("aaaaaa", "bbbbbb")).to.eq("aaaaaa");
      expect(whichIsLonger("abc", "def")).to.eq("abc");
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### The keyword `arguments`

You'll often encounter situations where you can't know ahead of time how many arguments you're going to need. Other times, you want to be able to decide how many arguments to pass in during invocation. In both of these situations you want to utilize a keyword that exists only inside of functions: `arguments`. This keyword exhibits the following behavior:

* the keyword `arguments` exists only inside of a function
* the keyword `arguments` is _array-like_, which means it has some functionality of an array, such as `length`, but not others (such as `.join`).

Let's use `arguments` in a function and see what we can and cannot do:

```javascript
function args() {
  return arguments.length;
}

args(1,2,3);
// 3
```

Notice that the correct number of arguments is being logged to the console. We achieved this functionality with the `length` property being used on `arguments`. Let's look at another example:

```javascript
function total() {
  var total = 0;
  for (var i=0; i<arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      total += arguments[i];
    }
  }
  return total;
}

total(1,2,3);
// 6
```

We can loop over `arguments` because it has a `.length` property, like an array. We can also index into it, because it contains all of the arguments that were passed into the function when it was invoked, in the order that they were passed in.

Now watch what happens when we try to use an array method such as `pop()`:

```javascript
function args() {
  console.log(arguments.pop());
}

args(1,2,3);
// ...arguments.pop is not a function...
```

Using the `pop()` method doesn't work, and this observation confirms our assumption that `arguments` doesn't have access to all methods of an array. So what methods or properties does it have? Let's use console.log to see! As we'll soon notice, `arguments` is actually an object where each argument being passed, from left to right, is assigned a numeric key starting from the integer `0`. `arguments` also has a `length` property, as we learned in an earlier example.


### !challenge

* type: code-snippet
* language: javascript
* id: 53800f1c-7f3a-4eff-a667-b1de4bd7b425
* title: Variable Arguments

### !question

Time to use the `arguments` keyword ourselves.

* Create a function called `average`
* The function should have no parameters
* Using the `arguments` keyword, calculate the _integer_ average of all the numbers passed into the function
* Remember that the average is the sum, divided by the number of elements you are averaging.
* Look up [`Math.ceil()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) to turn your floating point numbers into integers

### !end-question

### !placeholder

Write your function here...

### !end-placeholder

### !tests

```js
describe('average', function() {

    it("returns the average of all numbers given", function() {
      expect(average(3,3,3,5,6,7), "Be sure to return an integer").to.eq(5);
      expect(average(3,3,3), "Be sure to return the average").to.eq(3);
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### Optional Arguments

Javascript allows us to call functions without all of the defined arguments. Take a look at the example below- it has two parameters: `base` and `exponent`. We're able to call the function successfully without both arguments, because on the first line we're using a technique called **Short Circuit Evaluation**. `var exponent = exponent || 2;` will set the variable `exponent` to `2` in the case that `exponent` contains a "falsey" value such as `undefined`).

```js
function power(base, exponent) {
  var exponent = exponent || 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64

```

### !challenge

* type: code-snippet
* language: javascript
* id: 2262e150-7fc4-4c8c-b796-4075c2200742
* title: Optional Arguments

### !question

What if you want your exponent to be `0`? Rewrite the function so that it can take 0 as an exponent.

### !end-question

### !placeholder
```js

function power(base, exponent) {
  var exponent = exponent || 2;
  var result = 1;
  for (var count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
```

### !end-placeholder

### !tests

```js
describe('power', function() {

    it("returns the correct answer", function() {
      expect(power(5), "Doesn't return the correct answer").to.eq(25)
      expect(power(4), "Doesn't return the correct answer").to.eq(16)
    })

    it("returns 1 when given an exponent of 0", function() {
      expect(power(5, 0), "Didn't account for 0").to.eq(1)
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge