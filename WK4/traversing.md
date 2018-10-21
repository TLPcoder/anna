# Traversing Data Structures

## Objectives

* Write a for loop to iterate over an Array
* Write a for-in loop to iterate over an Object

### Iterating over an Array

One of the most common things we want to do with an array is iterate over it so that we can look at and use each element in an array. We commonly use a `for` loop to iterate over an array.

#### `for` loops with Arrays

Let's first view the code to iterate with arrays:

```javascript
var books = ["JavaScript: The Good Parts", "Eloquent JS", "You Don't Know JS"];

for (var i = 0; i < books.length; i++) {
	var book = books[i];
	console.log(book);
}
```

Will output:

```
> JavaScript: The Good Parts
> Eloquent JS
> You Don't Know JS
```

Imagine that we want to iterate through every element from our array from the first index to the last index. To achieve this goal, we essentially define a four-step process:

1. Declare a variable that represents the first index (`i`) and set its value to the first index (`0`).
2. Write a conditional statement that terminates when we iterated once for each element in the array.
3. We want to increment `i` after every iteration of the `for` loop.
4. During each iteration, we use `i` to access an element in the array.

### !challenge

* type: paragraph
* id: e48c2efe-acd3-430a-a178-0d4924db6f9d
* title: Write a loop Exercise

##### !question

Create an array called `cheer` and give it the values `[1, 2, 3, 4]`.

Write a loop that iterates over the array, doubles each element, and stores it in the same index it got it from.
It should look like: `[2, 4, 6, 8]` (who do we appreciate?)

##### !end-question

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* id: 61a27caf-d28b-4125-a5eb-0d401ec37c0f
* title: Write a loop Exercise 2

##### !question

Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello". Let's help her out.

```js
var lines = [
	"It's me.",
	'Can you hear me?',
	'from the other side',
	'from the outside'
];
```
Write a loop that logs to the screen each of her lines with the word "Hello" in front of it.

##### !end-question

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* id: 3919d02c-59cc-454d-9f45-3846119dc0c5
* title: Why use single quotes or double quotes?

##### !question

🤔 Reflect: In the code sample above, `"It's me."` is using double quotes, while the rest are using single quotes. Will this cause a `SyntaxError`? Why or why not?

##### !end-question

##### !placeholder

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge


### Iterating over Objects

A `for-in` loop allows your to iterate over each key in an Object. Here's the syntax for a `for-in` loop:

```javascript
var person = {
  firstName: "Homer",
  middleName: "Jay",
  lastName: "Simpson"
};

// "Homer"
// "Jay"
// "Simpson"
for (var key in person) {
  console.log(person[key]);
}

// firstName
// middleName
// lastName
for (var key in person) {
  console.log(key);
}
```

Imagine that we want to iterate through every key-value pair in an object named `person`. To achieve this goal, we essentially define a two-step process:

1. Declare a variable that represents the key of an object and associate with an object using the keyword `in`.
2. Access all values of a key using the standard syntax for accessing the values of a key: `person[key]`. If we want to access just the keys, they we can just use the variable we created to represent a key.