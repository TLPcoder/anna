# Higher-Order Functions (HOFs)

### !instructor

Here's an in-class lesson that covers this + scope.
Have students fork and clone it, then walk through the problems in class. Make sure to Work the Clock and have them solve the problems in pairs, while you walk around and gather data.  

[Scope HOF Lesson (In-Class)](https://github.com/gSchool/scope-HOF-lesson)

### !end-instructor

## Objectives

- Define Higher Order Functions
- Identify Higher Order Functions
- Call a function with a function as a parameter
- Create a function that returns a function
- Evaluate and diagram the state of the stack given different ways to use Higher Order Functions

## What are Higher Order Functions?

A **higher-order function** either

1. accepts a function as an argument OR
1. returns a function.

```js
// accepts a function as an argument
function higherOrder(done) {
  done();
}

higherOrder(function() {
  // this function becomes done()
});

//returns a function
function higherOrder() {
  return function () {
    //this function is returned
  }
}

higherOrder()(); // the returned function, used as an expression (currying)
let returnedFunction = higherOrder(); //the returned function, saved in a value (generator)
```

The concept of higher-order functions is rooted in mathematics, specifically [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus). (Don't worry, you don't need to understand calculus to understand Higher Order functions.)

As you've probably seen, higher-order functions are very common in JavaScript, but are tricky to wrap your brain around at first. Just remember, in JavaScript, an expression can be a function in the same way that it can be a number, string, or any other DataType.

```javascript
function higherOrder() {
  return function() {
    console.log("I'm a returned function!");
  }
}

var returnedFunction = higherOrder();
returnedFunction(); // I'm a returned function!

// Similarly, you can invoke the returned function like this.
higherOrder()();
```

#### What _aren't_ Higher Order Functions?

Just because a function is _anonymous_ doesn't mean it's a higher order function. There are lots of places we use anonymous functions, usually they're used for brevity to make higher order functions easier to read, but don't get them conflated.

Just because a function is used inside of another function doesn't mean either of them are higher order functions. A higher order function treats functions _as data_, but the use of a function as data by itself doesn't constitute a higher order function.

## Callbacks

The most common place you'll encounter higher order functions is when a function has a **callback**. A callback, by _convention_, executes after something asynchronous has happened.

### Example: `setTimeout` and `setInterval`

Available in `node` and in the browser, `setTimeout` and `setInterval` are both higher order functions that take a _callback_. The word "callback" clues you in as to what's happening- at the appropriate time, the function is "called back" to handle some task.

`setTimeout(fn, milliseconds)` executes a function _once_ after a specified number of milliseconds.
`setInterval(fn, milliseconds)` executes a function _every time_ a specified number of milliseconds passes.

```js
var oneSecond = 1000;
var countTo = 10;

var countDown = setInterval(function() {
  console.log(countTo-- + "...");
}, oneSecond);

setTimeout(function() {
  clearInterval(countDown);
  console.log("Ready or not, here I come!");
}, countTo * oneSecond);
```

The above example calls the function passed into `setInterval` every second. `setInterval` _itself_ returns a timer ID number so that you can stop timers after they've started. The function passed to `setInterval` _does not run_ until `setInterval` calls it. Try running this code in your browser to see what you get.

After 10 seconds have passed, `setTimeout` runs. It runs a function called `clearInterval`, which deletes timers given a timer ID. This proves that the anonymous function passed in to `setTimeout` does not run immediately, but way later, otherwise the first callback would never get to execute!

This is merely an example of one way to handle asynchronous operations. You'll see callbacks _everywhere_ in JavaScript, so get used to them.

## Functional Iteration

Here are four commonly used higher-order functions, designed for arrays— `forEach`, `map`, `filter`, and `reduce`. These methods allow us to iterate over an array without a `for` loop. This is especially useful when doing data processing, such as scraping a webpage, or cleaning up a CSV file with a lot of missing values. More and more JavaScript developers prefer this style to `for` loops, so you're likely to see it around.

Let's look at some examples:

#### `forEach`

The `forEach` method invokes a higher order function for each element of an array.

```javascript
var arr = [1, 2, 3, 4];

arr.forEach(function(element) {
  console.log(element);
});
```

Compare to a `for..of` loop:

```javascript
var arr = [1, 2, 3, 4];

for (var element of arr) {
  console.log(element);
};
```

See the [`Array.prototype.forEach` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) documentation on the Mozilla Developer Network.

#### `map`

The `map` method invokes a function for each element of an array, but allows each element to be transformed and pushed to a new array. In other words, the `map` method:

- Creates a new array that's the same size as the original array.
- Applies a function to each element of the original array.
- Pushes the return value of the function into the new array.

```javascript
var arr = [1, 2, 3, 4];

var squares = arr.map(function(element) {
  return element * element;
});

console.log(squares); // [1, 4, 9, 16]
```

Compare this with the equivalent syntax of a `for..of` loop:

```javascript
var arr = [1, 2, 3, 4];

var squares = [];

for (var element of arr) {
  squares.push(element * element);
}

console.log(squares); // [1, 4, 9, 16]
```

See the [`Array.prototype.map` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) documentation on the Mozilla Developer Network.

#### `filter`

After `map`, the `filter` method is probably the second most commonly used higher-order function. The `filter` method invokes a function for each element of an array, but allows each element to be filtered out of a new array. In other words, the `filter` method:

- Creates a new array that's no larger than the original array.
- Applies a function to each element of the original array.
- Pushes the element into the new array **if the function returns `true`.**

The function passed to the `filter` method is called a **predicate**, because it's value will be `true` or `false`.

```javascript
var arr = [1, 2, 3, 4];

var odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]
```

Compare this with the equivalent syntax of a `for..of` loop:

```javascript
var arr = [1, 2, 3, 4];

var odds = [];

for (var element of arr) {
  if (num % 2 !== 0) {
    odds.push(element);
  }
}

console.log(odds); // [1, 3]
```

See the [`Array.prototype.filter` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) documentation on the Mozilla Developer Network.

### `reduce`

The `reduce` method has a lot to offer and can be thought of as a swiss army knife. The use of `reduce` is best described through a couple examples of similar problems. Let's look at two problems, summing all of the numbers in an array and multiplying all the numbers in an array.

```javascript
var arr = [1, 2, 3, 4];

var result = 0;

for (var num of arr) {
  result = result + num;
}

console.log(result); // 10
```

```javascript
var arr = [1, 2, 3, 4];

var result = 1;

for (var num of arr) {
  result = result * num;
}

console.log(result); // 24
```

Can you spot the differences? They are incredibly similar, but they differ in 2 places.

- The initial value of `result` is `0` for addition and `1` for multiplication.
- The operation is `+` for addition and `*` for multiplication.

We can **abstract** this common task with the `reduce` method! The `reduce` method takes these differences as arguments that you can specify. Although you cannot pass an operator like `+` or `*`, you can pass in a function that takes in two values and produces the sum or product.

```javascript
var arr = [1, 2, 3, 4];

var sum = arr.reduce(function(result, element) {
  return result + element;
}, 0);

var product = arr.reduce(function(result, element) {
  return result * element;
}, 1);

console.log(sum);     // 10
console.log(product); // 24
```

> ⚠️ Notice the order of the parameters in the function passed into `reduce`. The running total is passed into the `result` parameter, and each element in the array is passed into the `element` parameter.

See the [`Array.prototype.reduce` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) documentation on the Mozilla Developer Network.

## Exercises

### !challenge

* type: project
* id: 120f6815-b4b0-46ce-97d0-58e270585176
* title: lodash

##### !question

### Question

Fork and clone this repository: https://github.com/gSchool/lodash
Follow the directions, and make all the tests pass. Then, submit your fork below:

##### !end-question

##### !placeholder

http://github.com/[your github username]/lodash

##### !end-placeholder

### !end-challenge

### !challenge

* type: project
* id: 1f7cb9cb-fbda-4707-9d6b-5adffe4f2e8e
* title: Function Tests

##### !question

### Question

Fork and clone this repository: https://github.com/gSchool/function-tests
Follow the directions, and make all the tests pass. Then, submit your fork below:

##### !end-question

##### !placeholder

http://github.com/[your github username]/function-tests

##### !end-placeholder

### !end-challenge

### Outside Resources

- [Map, Reduce and other Higher Order Functions by Ryan Guill](http://ryanguill.com/functional/higher-order-functions/2016/05/18/higher-order-functions.html)