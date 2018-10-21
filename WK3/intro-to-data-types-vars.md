# Variables and DataTypes

This article will introduce you to some of the basic units of JavaScript- Variables and DataTypes. It's a great place to start if you haven't written JavaScript before.

## Objectives

- Write comments to notate and organize your code
- Name all primitive data types in JavaScript.
- Explain what a variable is.
- Explain the difference between a value and an expression
- Explain the difference between `=`, `==`, and `===` in JavaScript.
- Explain what type conversion is.
- Name all the "falsey" values in JavaScript.

## Key Terms:

- Data Types
- Operators
- Statement
- Keyword
- Identifier
- Value
- Literal
- Expression
- Assignment
- Declaration

## Writing JavaScript

During this section, have open a JavaScript interpreter using the `node` command in your terminal, the console in your browser, or a [REPL](https://repl.it/languages/javascript) so that you can play with the code samples below.

### Comments

First, we'll look at comments. These are an essential tool in any programmer's toolbox, especially as they gain understanding of the code around them. A comment is text inside of a file that is _ignored_ by the programming language.

Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed which can be a valuable debugging tool. JavaScript has two ways of creating comments in code.

The first way is with the `//` style. This makes all text following it on the same line into a comment.

```javascript
// This is a one line JavaScript comment
```

The second way is the `/* */` style, which is more flexible. For example, you can use it on a single line.

```javascript
/* This is a one line JavaScript comment */
```

Or you can use it to make multiple line comments.

```javascript
/* This comment spans multiple lines. Notice
   that we don't need to end the comment on the first line. */
```

Most of the time, you'll use the `//` style because Atom can toggle a line to be commented or not using the `Command + /` keyboard shortcut. Go ahead, try it out!

```js
// console.log("I won't run!")
```

See the [comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Comments) documentation on the Mozilla Developer Network for more information.

## Data Types

A _Data Type_ is a format of information that behaves in a specific way.

The latest ECMAScript standard defines six _primitive_ data types:


- Boolean: True or False
- Number: Any number, integer or floating point
- String: Any text
- Undefined: A space in memory that has nothing in it _yet_
- Null: A space in memory that has been explicitly set to be empty
- Symbol (new in ECMAScript 6)

A **primitive** is data that's immutable. In other words, data that can't be changed.

For example, the number `42` in JavaScript is a primitive. That means it can never be anything other than `42`. Adding `1` to it doesn't change it's value, but instead, results in the number `43`, a completely new and equally unchangeable number. This may sound a bit confusing and obvious, but it'll make more sense when you learn about Data Structures.

See [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) and [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) on the Mozilla Developer Network for more information.

### Boolean

A **Boolean** represents a logical entity and can have two values: `true` and `false`.

```javascript
// San Francisco is expensive
true;

// Seattle is cheap
false;
```

See the [boolean type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) and [`Boolean` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) on the Mozilla Developer Network for more information.

### Number

According to the ECMAScript standard, there's only one number type. And it represents both integer and floating-point (i.e. decimal) numbers between -(2⁵³ - 1) and 2⁵³ - 1).

```javascript
// integer numbers
-3;
-2;
-1;
0;
1;
2;
3;

// floating-point (i.e. decimal) numbers
-42.42;
-2.718;
-0.25;
.66666667;
3.14;
199.99;
```

If you want to distinguish between integers and floats, there are a couple of ways to do this. The most modern approach, as of ES6, is to use the `Number.isInteger()` function.

```javascript
Number.isInteger(4);    // true
Number.isInteger(4.1);  // false
Number.isInteger(4.0);   // true
```

Additionally, the number type has three symbolic values: `Infinity`, `-Infinity`, and `NaN` (not-a-number). To determine if a number is finite or not-a-number, use the `Number.isFinite()` and `Number.isNaN()` functions respectively.

❗️ Both n's of `NaN` must be uppercase otherwise JavaScript will throw an error.

```javascript
Number.isFinite(100);       // true
Number.isFinite(Infinity);  // false
Number.isFinite(-Infinity); // false

Number.isNaN(200);  // false
Number.isNaN(NaN);  // true
```

See the [number type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) and [`Number` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) on the Mozilla Developer Network for more information.

### String

JavaScript's string type is used to represent textual data. To create a string, simply append and prepend a series of characters with either single or double quotation marks. Which quotations you use is a matter of style preference. Just make sure that both opening and closing quotations are the same otherwise JavaScript will throw an error.

```javascript
'Jane';
"John";
```

Each character in the string occupies a position in the String. The first character is at index 0, the next at index 1, and so on. The length of a String is the number of characters in it.

```javascript
'melissa'.length;       // 7
'melissa'[0];           // 'm'
'melissa'.substr(1);    // 'elissa'
'melissa'.substr(2, 2); // 'li'
```

There are a number of built-in methods associated with strings, some of which are new additions as of ES6.

```javascript
'matt'.toUpperCase(); // 'MATT'
'MATT'.toLowerCase(); // 'matt'

'Matt'.indexOf('a');  // 1
'Matt'.indexOf('at'); // 1
'Matt'.indexOf('ab'); // -1

'Matt'.indexOf('t');      // 2
'Matt'.lastIndexOf('t');  // 3

// ES6
'Matt'.startsWith('Ma');  // true
'Matt'.endsWith('q');     // false
'Matt'.includes('t');     // true
```

See the [string type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) and [`String` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) on the Mozilla Developer Network for more information.

Strings are for storing _text_. The reason we have strings is so that we can construct interfaces, or even blocks of HTML.

We haven't talked about the other types, `null`, `undefined` and `symbol` yet. They won't make sense until we talk about **Variables**.

## Variables

Take a look at this video, which should introduce you to the concept of Variables.

### Intro: A mental model of variables

<iframe src="https://player.vimeo.com/video/142087926?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


A Variable is a label for a place in your computer's RAM where you've stored some data, like the datatypes we've discussed. A Variable lets you give a name to a value. Think of a variable as a bucket that can store one thing inside of, with a single space for a label. To create a new variable, use the `var` keyword followed by the name of the variable.

```javascript
var person;
```

> A **keyword** is a word that has special meaning and is [reserved by the ECMAScript standard](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).

The word variable means 'can change' or 'can vary'. In JavaScript, the value inside a variable can vary over time. Additionally, a JavaScript variable can store many different types of values. However, if you put a new value in a variable, the old one goes away. This is called *reassigning* a variable.

❗️ Remember, a variable only needs to be declared once using the `var` keyword.

```javascript
var name = 'Casey';
name = 'Francis';
name = 42;
```

Variable names in JavaScript can't contain spaces. The standard practice is to have variables start with a lowercase letter and capitalize each subsequent word. This is called camelCase.

```javascript
var firstName = 'Paula';
```

Be careful with your variable names because it's easy to misspell them. Even if you just get the capitalization wrong, the JavaScript interpreter won't know what you mean.

```javascript
var lastName = 'Dean';
lastname; // ReferenceError
```

Variable names also can't start with numbers, but can contain numbers. If needed, it's common to prepend numbers at the end of a variable name.

```javascript
var person1;
var person2;
```

Variables can also store the result of any **expression**.

```javascript
var result = 2 + 2;
```

### JavaScript Language

The following video will help you identify, and speak correctly about, key concepts in JavaScript code. The video is approximately 15 minutes long, but is well worth the watch. Please watch the whole video. 

<iframe src="https://player.vimeo.com/video/141864271?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

### Undefined

`undefined` represents **a value that hasn't been defined**. A variable that has not been assigned a value is of type `undefined`. A function returns `undefined` if a value is not returned, which is the default. When you see `undefined`, it should signal to you that you haven't assigned anything to a variable. It signifies that you may have a label for a variable, but you don't necessarily have a value for it. Think of it as a question, prior to having an answer.

```javascript
var x;
x; // undefined

x = 3;
x; // no longer undefined
```

See the [`undefined` global property](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) on the Mozilla Developer Network for more information.

### !challenge

* type: code-snippet
* language: javascript
* id: 8f5833c5-a4c8-4a14-ad9c-1423df5f9318
* title: Create Undefined Variables
### !question

Create two variables that will contain information you don't yet have:

```js
numHoursToLearnJavascript
numHoursToLearnTennis
```

### !end-question

### !placeholder

### !end-placeholder

### !tests

```js
describe('undefined Variables', function() {

    it("has a variable called numHoursToLearnJavascript, which is undefined", function() {
      expect(numHoursToLearnJavascript, "numHoursToLearnJavascript should be undefined!").to.be.undefined;
    })

    it("has a variable called numHoursToLearnTennis, which is undefined", function() {
      expect(numHoursToLearnTennis, "numHoursToLearnTennis should be undefined!").to.be.undefined;
    })

})
```
### !end-tests

### !explanation

When something is `undefined`, it is because we don't know what the value is, yet. It is the _default value_ of all variables, until you use the assignment operator.

### !end-explanation

### !end-challenge

### Null

The value `null` represents the **intentional absence of any value**. Unlike `undefined`, it's not explicitly set by default to unassigned variables. If you want something to be `null`, you must make it so.

```javascript
var x = null;
```

See the [`null` value](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) on the Mozilla Developer Network for more information.

Further reading:

- [What is the difference between null and undefined in JavaScript?](http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript)
- [Why is typeof null "object"?](http://stackoverflow.com/questions/18808226/why-is-typeof-null-object)

### !challenge

* type: code-snippet
* language: javascript
* id: 34705375-de83-4a50-bcee-4d7ccd0ce414
* title: Create Null Variables

### !question

Create two variables that we already know will be `null`. Assign them the special keyword `null`.
```js
uglyKittens
boringPuppies
```

### !end-question

### !placeholder

### !end-placeholder

### !tests

```js
describe('Null Variables', function() {

  it("has a variable called uglyKittens, which is null", function() {
    expect(uglyKittens, "uglyKittens should be null, there are no ugly kittens!").to.be.null;
  })

  it("has a variable called boringPuppies, which is null", function() {
    expect(boringPuppies, "boringPuppies should be null, there are no boring puppies!").to.be.null;
  })

})
```
### !end-tests

### !explanation

Explicitly setting a value to `null` is for _communicating to other developers_ about the idea of "emptiness". Null is "empty on purpose", Undefined is "empty by default".

### !end-explanation

### !end-challenge

### Symbol

Symbol is the newest primitive data type to be added to JavaScript. Talking about symbols is a bit advanced for the first day of JavaScript, especially since we haven't talked about objects yet. If want a sneak peak, see the [`Symbol` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) on the Mozilla Developer Network for more information.

### Arithmetic operators

JavaScript lets you perform basic arithmetic operations like addition, subtraction, multiplication, and division using the `+`, `-`, `*`, and `/` operators respectively. The arithmetic rules and order of operations apply as expected.

```javascript
1 + 1;  // 2
4 - 8;  // -4
3 * 4;  // 12
5 / 2;  // 2.5
```

In JavaScript, the `%` operator finds the remainder after division of one number by another.

```javascript
4 % 2;  // 0
4 % 3;  // 1
10 % 7; // 3
12 % 3; // 0
```


### !challenge

* type: paragraph
* id: DFFB46F6-B04D-4431-8725-30004F936325
* title: how does modulo work

##### !question

How can you use the `%` operator to check whether or not an integer is even or odd?

##### !end-question

##### !placeholder

Write JavaScript

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: BF2D9D6F-DA89-4879-A125-81BECD41D6CB
* title: Evaluate Modulo

##### !question

What does the following evaluate to?

```
10 % 5
```

##### !end-question

##### !answer

0

##### !end-answer

##### !placeholder

Write your answer

##### !end-placeholder

##### !explanation

Because 10 can be evenly divided by 5, the remainder is 0.

##### !end-explanation

### !end-challenge


The `+` operator can also be used for **string concatenation**.

```javascript
'Hello ' + 'world!';  // 'Hello world!'
```

Notice that the meaning of the `+` operator depends on the data types of the operands. Be careful when you combine different meanings of `+` in the same expression because JavaScript adheres to arithmetic's **order of operations**.

### !instructor
http://regexr.com/3fp5a <- Regexr for the below regex
### !end-instructor

### !challenge

* type: short-answer
* id: FC0FFF22-C9ED-4E38-8CF3-BDD6FEA68EA3
* title: Fix the String

##### !question


First, try this line of code in either your Browser Console or in your Terminal:
```javascript
'The sum of ' + 5 + ' and ' + 7 + ' is ' + 5 + 7;
```

Fix this statement so that it is true.

##### !end-question

##### !answer

/['"]The sum of ['"] ?\+ ?5 ?\+ ?['"] and ['"] ?\+ ?7 ?\+ ?['"] is ['"] ?\+ ?\(5 ?\+ ?7\);?/

##### !end-answer

##### !placeholder

Copy-Paste the code above and modify it so that it properly prints the sum.

##### !end-placeholder

##### !explanation

Adding parentheses around the 5 + 7 turns it into a standalone expression, allowing the interpreter to treat 5 and 7 as numbers, but then turn the result of the expression into a string that is concatenated onto the other string.

##### !end-explanation

### !end-challenge

See the [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators) on the Mozilla Developer Network for more information.

### The Number global object

Using the following methods in the `Number` global object, you can convert a string to a number.

```javascript
Number.parseInt('42');        // 42
Number.parseFloat('3.14');    // 3.14
Number.parseInt('forty two'); // NaN
```

See the [`Number` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) on the Mozilla Developer Network for more information.

### The Math global object

JavaScript also has a `Math` global object that has properties and methods for mathematical constants and functions.

```javascript
// pi
Math.PI;  // 3.141592653589793

// 2⁴
Math.pow(2, 4); // 16

// √4
Math.sqrt(4); // 2

// Round down to an integer
Math.floor(3.14); // 3
Math.floor(3.99); // 3

// Round up to an integer
Math.ceil(5.10);  // 6
Math.ceil(5.99);  // 6

// Round to the nearest integer
Math.round(7.25); // 7
Math.round(7.99); // 8
```

You can also use the `Math` object to generate random numbers.

```javascript
// Generate a random number from 0 up to but not including 1
Math.random();  // .229375290430

// Generate a random number from 0 up to but not including 10
Math.random() * 10; // 7.133676137309521

// Generate a random number from 1 up to but not including 11
Math.random() * 10 + 1; // 3.390042587649077

// Generate a random number from 1 and 10
Math.floor(Math.random() * 10 + 1); // 8
```

See the [`Math` global object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) on the Mozilla Developer Network for more information.

### Logical operators

Logical operators `&&` (and), `||` (or) and `!` (not) are typically used with boolean (logical) values. When they are, they return a boolean value.

```javascript
true && true;   // true
true && false;  // false
false && true;  // false
false && false; // false

true || true;   // true
true || false;  // true
false || true;  // true
false || false; // false

!true;          // false
!false;         // true
```

As logical expressions are evaluated left to right, they are tested for possible "short-circuit" evaluation using the following rules.

```javascript
false && (anything);  // Short-circuit evaluated to false
true || (anything);   // Short-circuit evaluated to true
```

See the [logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) on the Mozilla Developer Network for more information.

### !challenge

* type: multiple-choice
* id: 01CBB9B7-D93B-4C92-A8DF-51EFC11C7D5B
* title: Complex Boolean Statements

##### !question

### Question

What will the following evaluate to?

```
true && (false && true)
```

##### !end-question

##### !options


* true
* false
* undefined


##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Because both sides of the logical operator `&&` must be `true` in order for the entire expression to evaluate to `true`, the final result is `false`

##### !end-explanation

### !end-challenge

### Relational operators

Relational operators `>` (greater than), `>=` (greater than or equal to), `<` (less than), and `<=` (less than or equal to) are used to compare the values of two numbers.

```javascript
7 < 7;  // false
7 <= 7; // true
```

Relational operators are used to compare the values of two strings as well.

```javascript
'a' > 'a';  // false
'a' >= 'a'; // true

'a' > 'b';  // false
'a' >= 'b'; // false

'b' > 'a';  // true
'b' >= 'a'; // true
```

### !challenge

* type: multiple-choice
* id: DF7189F3-E2CE-4367-B7B4-6B5D4AD6D3F0
* title: Greater Than

##### !question

### Question

What does this evaluate to?

```
(21 * 2) > (22 * 1)
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

The numbers are evaluated before the comparison is done.

##### !end-explanation

### !end-challenge


### !challenge

* type: multiple-choice
* id: 2F3E2683-017E-4D5D-BCBE-E1A70DA12767
* title: Greater Than

##### !question

### Question

What does this evaluate to?

```
36 % 6 > 1 - 500;
```

##### !end-question

##### !options

* true
* false

##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

The numbers are evaluated before the comparison is done, even without parenthesis.

##### !end-explanation

### !end-challenge

See the [relational operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Relational_operators) on the Mozilla Developer Network for more information.

### Equality operators

The triple equals `===` operator compares two values to see if they're exactly the same or "strictly equal" to one another. The operator evaluates to `true` if the values are equal **and** are the same type.

```javascript
4 === 3   // false
3 === 3   // true
3 === '3' // false
```

Conversely, the `!==` operator evaluates to `true` if the values are not equal and/or are not the same type.

```javascript
4 !== 3   // true
3 !== 3   // false
3 !== '3' // true
```

Be careful not to confuse the `===` operator with the single equal `=` operator. The `===` operator asks "Are these two values strictly equal?" while the `=` operator means "Assign the value on the right to the variable on the left." In short, the `===` operator is used for **comparison** and the `=` operator is used for **assignment**.

Remember, when you use the `=` operator, a variable name _must_ be on the left and the value you want to assign to that variable _must_ be on the right. On the other hand, since the `===` operator compares two values to see if they're strictly equal, it doesn't matter which value is on which side.

Related to the `===` and `!==` operators are the `==` and `!=` operators respectively. The double equals `==` operator compares two values to see if they're equal-ish or "loosely equal" to one another. The operator evaluates to `true` if the values are equal even if they're not the same type.

```javascript
4 == 3    // false
3 == 3    // true
3 == '3'  // true
```

Conversely, the `!=` operator evaluates to `true` if the values are not equal even if they're not the same type.

```javascript
4 != 3    // true
3 != 3    // false
3 != '3'  // false
```

At first it might seem much easier to use the `==` operator instead of the `===` operator. However, the `==` operator in JavaScript often produces some unexpected results.

```javascript
true == 1       // true
true == 'true'  // false
```

When JavaScript compares two values with the `==` operator, it first converts them to the same type. In the first example, it converts the boolean `true` into the number `1` which is why `true == 1` is true. In the second example, it converts the boolean `true` into the number `1` _and_ the string `'true'` into the number `NaN` which is why `true == 'true'` is false.

Because of [this and other strangeness](https://dorey.github.io/JavaScript-Equality-Table/), it's probably safest to just stick with `===` for now.

### !challenge

* type: multiple-choice
* id: 20818BA1-764D-4F49-8CBE-563BFEBE5197
* title: Compare expressions

##### !question

### Question

What will the following evaluate to?

```
"hello" == "Hello";
```

##### !end-question

##### !options


* true
* false
* NaN
* undefined


##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Even though we used the same type AND didn't strictly compare, because one string contains an uppercase letter they are not identical.

##### !end-explanation

### !end-challenge


### !challenge

* type: multiple-choice
* id: A032D35B-3AB6-45A3-9C60-5F716925DC69
* title: Compare expressions

##### !question

### Question

What will the following evaluate to?
```
100 * 5 === "500"
```
##### !end-question

##### !options


* true
* false
* NaN
* undefined


##### !end-options

##### !answer

false

##### !end-answer

##### !explanation

Because we compared type with a strict comparison operator, though they are both 500, one is a string and so they are not equivalent.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 6B21B6CD-B773-4F46-9DC2-A3F315E4D7DD
* title: Compare expressions

##### !question

### Question

What will the following evaluate to?
```
100 % 20 == "0"
```
##### !end-question

##### !options


* true
* false
* NaN
* undefined


##### !end-options

##### !answer

true

##### !end-answer

##### !explanation

We didn't compare type this time, and so 0 is equal to "0".

##### !end-explanation

### !end-challenge

See the [equality operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_operators) on the Mozilla Developer Network for more information.

### Type Conversion

Sometimes, your code uses a value of one type when JavaScript expects a value of a different type. In this case, rather than throwing an error, JavaScript will convert the value into a type that makes sense.

For example, suppose you type the expression `1 + 'hi'`. For numbers, the `+` operator means addition; but for strings, it means concatenation. So how does JavaScript deal with this ambiguity? It converts the number into a string and then concatenates.

This **type conversion** also happens when you pass values into `if` statements. In a block of code like `if (x) {...}`, the `x` variable is expected to be a boolean. But if it's not, JavaScript will convert it to a boolean. Most values in JavaScript are "truthy". That is, they get converted into `true` should the need arise. In fact, there are only six "falsy" values in JavaScript.

1. `false`
1. `null`
1. `undefined`
1. `0`
1. `''`
1. `NaN`

See the [falsey](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) and [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) documentation on the Mozilla Developer Network for more information.

You can always check something's type in JavaScript using the `typeof` operator.

```javascript
typeof true // 'boolean'
typeof 42   // 'number'
typeof 'hi' // 'string'
```

See the [typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) on the Mozilla Developer Network for more information.

### Further Reading

Want to dig deeper? Read chapters 1 and 2 in [Eloquent JavaScript](http://eloquentjavascript.net/). A word of caution though: this book is great but not very beginner friendly.

[You Don't Know JS; Chapter 1](https://github.com/getify/You-Dont-Know-JS/blob/master/up & going/ch1.md) Read through "Operators".

## Resources

- [Mozilla Developer Network - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Quick history of JavaScript by Douglas Crockford](https://www.youtube.com/watch?v=t7_5-XYrkqg)
- [Wikipedia: JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [Wikipedia: ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)