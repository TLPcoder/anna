# Control Flow

Related Standard: <a href="#">W0099</a> - Use conditionals and loops to control the flow of a program

## Objectives

By the end of this lesson you will:

- Use `if/if else/else` statements to conditionally execute code
- Use `while` loops to conditionally repeat statements
- Use `for` loops to iterate a specific number of times

## Key Terms

- Control Structures
- Iterator
- Conditionals
- Loops

## Why do we need Conditionals and Loops?

Programs are of course more complex than one-line statements and variable assignment. If we want to control programs that change based on the parameters of the program (eg, in response to user input), we'll need a way to tell our program when to do what.

Enter **Control Structures**.

Control Structures are a way of controlling what statements are executed. We can execute statements **IF** something happens. **IF** something has not happened, we can do something **ELSE**. **WHILE** something is happening, we can execute statements, or we can execute them **FOR** a specific number of *iterations*.

> To **iterate** means "perform or utter repeatedly."

## Conditionals

Conditionals control the flow of a program.  Conditionals decide which code statements gets run based on some **Boolean** input to the conditional.  An example from everyday life would be:

> If you spend $100 or more, then you get 20% off, otherwise the purchase is full price

In the example above, the input to the conditional is whether or not the total amount of your purchase is greater than or equal to $100.

### If statements

The most basic control flow statement is the `if` statement.  Here is our example from above in code:

```javascript
var total = 284;

if (total >= 100) {
  total = total * .8;
}

// Display the total to the user
console.log('Your total is: $' + total.toFixed(2));
```

Let's practice with some other if statements!

```javascript
if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
}

if (1 + 1 !== 2) {
  console.log('Math is broken.');
}
```

We can also combine these two statements using `if...else`:

```javascript
if (1 + 1 === 2) {
  console.log('Arithmetic is the best');
} else {
  console.log('Math is broken');
}
```


For each of these examples, try to determine what the console will log:
**NOTE:** Remember the parentheses!


### !challenge

* type: short-answer
* id: F438E0A8-772C-48D6-AD88-E6D1EDB4CE25
* title: if else 2 > 1

##### !question

What will the following code display to the user?

```javascript
if (2 > 1) {
  console.log('A');
} else {
  console.log('B');
}
```

##### !end-question

##### !answer

A

##### !end-answer

##### !placeholder

(input is case sensitive)

##### !end-placeholder

##### !explanation

Because `(2 > 1)` evaluates to `true`, the first part of the `if` block will execute, but nothing in the `else` block will.

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: 162DE2DA-E82F-43F2-87D0-4A65C459F189
* title: if else complex statement

##### !question

What will the following code display to the user?

```javascript
if (2 > 1 && 5 <= 3) {
  console.log('C');
} else {
  console.log('D');
}
```

##### !end-question

##### !answer

D

##### !end-answer

##### !placeholder

(input is case sensitive)

##### !end-placeholder

##### !explanation

While `2 > 1` will evaluate to `true`, `5 <= 3` evaluates to `false`. Because `true && false` is ultimately `false`, the `else` block will run, and the statements in the `if` block won't.

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: 9CB7A26D-9637-4EB8-8B19-E4C5FCB7DA03
* title: if else if else complex statement

##### !question

What will the following code display to the user?

```javascript
if (7 % 2 === 0 || Number.isInteger(3.4)) {
  console.log('E');
} else if (6 <= Math.floor(5.8)) {
  console.log('F');
} else {
  console.log('G');
}
```

##### !end-question

##### !answer

G

##### !end-answer

##### !placeholder

(input is case sensitive)

##### !end-placeholder

##### !explanation

Let's break this down. `7 % 2 === 0` evaluates to `false` and `Number.isInteger(3.4)` returns `false`. That makes our first `if` condition `false || false`, which is just `false`.

The next condition, the `else if` condition, asks if `6` is `<=` `Math.floor(5.8)`. Because `Math.floor(5.8)` returns `5`, and `5` is not greater than or equal to `6`, that entire condition evaluates to `false`. So that block doesn't execute either.

In the case that neither execute, the `else` block kicks in, and we get `G`.

##### !end-explanation

### !end-challenge

See the [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) documentation on the Mozilla Developer Network for more information.

### Switch Statements

Switch statements are another way to express a very common structure:

```
if () {
} else if () {
} else if () {
} else {
}
```

Here is the syntax for a switch statement which would replace our if, else if, else construct:

```
switch (/* our expression */ ) {
   case /*value 1*/:
       // some code
       break;
   case /*another value*/:
       // some code
       break;
   default:
       // the default code, just like the else block
       break;
}
```

As you can see, `switch` statements cover many possible values for a *single* expression. If you want to test several expressions in combination, a switch statement won't help you there.

Here is a code example. Note that `typeOfPet` can have many different values. The value of `typeOfPet` is compared with the expression after `case`.

```
var typeOfPet = prompt("Please name an animal");
switch (typeOfPet) {
	case "dog":
	   console.log(typeOfPet + " goes woof.");
	   break;
	case "cat":
	   console.log(typeOfPet + " goes meow.");
	   break;
	case "bird":
	   console.log(typeOfPet + " goes tweet");
	   break;
	case "mouse":
	   console.log(typeOfPet + " goes squeak");
	   break;
	case "fox":
	   console.log(typeOfPet + " goes Ring-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding! Gering-ding-ding-ding-dingeringeding");
	   break;
	default:
	   console.log("Sorry, I don't know what noise that animal makes.");
	   break;
}
```

The equivalent syntax with an if statement would be:

```
var typeOfPet = prompt("Please name an animal");
if (typeOfPet === "dog") {
  console.log(typeOfPet + " goes woof.");
} else if (typeOfPet === "cat") {
  console.log(typeOfPet + " goes meow.");
} // et cetera
```

### !challenge

* type: multiple-choice
* id: 3ADDD65D-54E7-4991-8EC1-490BAD513E58
* title: if or switch 1

##### !question

### Question

Given the following problem in Pseudocode, which structure would you use to handle this problem?

```
IF user's name is longer than two characters AND user's name does not contain the word "admin" THEN
  IF the user's age is over 13 OR the user has permission from a parent to sign up THEN
    create user
  ELSE IF the user's age is under 13 AND the user does not have permission from a parent THEN
    alert user that they need permission from a parent

```

##### !end-question

##### !options


* If Statement
* Switch Statement
* Neither


##### !end-options

##### !answer

If Statement

##### !end-answer

##### !explanation

Because you have to check multiple expressions (the user's age, whether they have permission), you should use an if statement. You have a combination of cases that can't easily be reduced to a single expression with many results.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: A7267401-C5A2-4BCE-9949-A9EBE1202B69
* title: if or switch 2

##### !question

### Question

Given the following problem in Pseudocode, which structure would you use to handle this problem?

```
IF the user's age is under 13 THEN
  alert user that they cannot sign up
ELSE IF the user's age is over 13 but under 16 THEN
  alert the user that they can sign up but cannot drive a car
ELSE IF the user's age is over 16 but under 18 THEN
  alert the user that they can sign up and drive but not vote
ELSE IF the user's age is over 18 but under 21 THEN
  alert the user that they can sign up, drive, and vote but not rent a hotel room
ELSE IF the user's age is over 21 but under 25 THEN
  alert the user that they can sign up, drive, vote, and rent a hotel room but not rent a car
ELSE IF the user's age is over 25 but under 35 THEN
  alert the user that they can sign up, drive, vote, rent a hotel and a car but not run for office.
ELSE
  let the user know they can do anything they want!
END

```

##### !end-question

##### !options


* If Statement
* Switch Statement
* Neither


##### !end-options

##### !answer

Switch Statement

##### !end-answer

##### !explanation

Because you are checking _one_ expression (the user's age) but there are many (more than 3) values, a switch statement is appropriate here.

##### !end-explanation

### !end-challenge



## Loops

### While loops

A while loop is another way of controlling our programs.  Here is the syntax:

```
while ( /* Boolean expression */ ) {
    Execute code
}
```

You can see that it is very similar to an `if` statement. The primary way that it differs is that instead of executing the code inside one time, it continues to execute the code inside, over and over, as long as the expression evaluates to `true`.

Here is an example:

```
var timesForPhrase = 10;
var phrase = prompt("What do you want to say " + timesForPhrase + " times?");

var i = 0;
while (i < timesForPhrase)  {
   console.log(phrase);
   i++;
}

```

In this example, the code will execute 10 times. The first time, the condition checked is `0 < 10`. The code runs, which increments `i` by 1, and the condition checked is now `1 < 10`. This repeats until `10 < 10`, which is `false`, and the loop terminates.

```
var input;
var total = 0;
while (input != "q") {
  input = prompt("What numbers do you want to add to the total?");
  if (!isNaN(parseInt(input))) {
    total += parseInt(input);
  }
  console.log("Total is now: " + total)
}

```

This code could *theoretically* run forever, because we don't know when the user will type `q`. Use `while` loops when you want code to run _until_ something happens.

### Do-while loop

Related to the while loop is the do-while loop. How do you think these two code blocks are similar? How are they different?

```
// log some squares

var i = 1;
while (i < 10) {
  console.log(i*i);
  i++;
}

// log some squares, another way

var i = 1;
do {
  console.log(i*i);
  i++;
} while(i < 10);
```

#### Beware of infinite loops!

Sometimes, you may accidentally write a loop that will never end. This is called an **infinite loop**, and is something every programmer does from time to time. Here's an example: suppose you want to log the numbers 1 through 10 to the console using a `while` loop, but you forget to increment your index at each step:

```
// Don't paste this into the browser unless you want to force quit Chrome!
var i = 1;
while (i <= 10) {
  console.log(i);
}
```

#### Discuss 💬
What causes this code to run forever?

### For Loops

`for` loops perform the same actions as a `while` loop, but are structured differently in order to facilitate different uses. Exactly the same way that `if` statements and `switch` statements do the same thing (conditionally execute code), but are used in different ways.

Here is an example of a for loop:
```
for (var i=0; i < 10; i++) {
  console.log(i);
}

```

This example prints the numbers 1-10, exactly as the `while` loop example above does. The way that it works is different, however.

What happens in a `for` loop is:

1. The initialization code for the loop runs once, the first time the loop is executed. In the example above, `var i=0;` is the initialization step.
2. The conditional is checked, and the loop executes the code. This part is most similar to the `while` loop. In the example above, `i < 10;` is the condition.
3. The statements inside the loop are executed - `console.log(i);` in the example.
4. The iteration step runs last. This is where you change variables related to the condition step. `i++;` is the iteration step in the code above.

When you know in advance how many times you want a loop to run (the length of an array, or a specific number), a `for` loop is best. When you want to run code _until_ a condition is met, a `while` loop is best.

Sometimes it helps to think about it like this:  
* `while` the sun is out, sit outside and drink lemonade.
* `for` 3 hours, sit outside and drink lemonade.

When you get to Arrays and Objects, you'll cover `for` loops again, as they are very useful when dealing with data structures.

### Exercises

### !challenge

* type: paragraph
* id: 79FF99E2-BDD1-4DAB-9E09-C11F11431532
* title: for or while 1

##### !question

Explain what the code below is doing. Why is a `while` loop more suitable than a `for` loop in this case?

```javascript
var total = 0;
var flip = Math.random();
while (flip > 0.5) {
  total++;
  flip = Math.random();
 }
console.log("Number of consecutive times heads came up: " + total);
```

##### !end-question

##### !placeholder

Why is `while` better than `for` here?

##### !end-placeholder

##### !explanation

Because we don't know how many times the code will execute before terminating, we should use a `while` loop.

##### !end-explanation

### !end-challenge

### !challenge

* type: paragraph
* id: 3DE399F8-4CF4-46A4-BC91-9C53FAF13A2D
* title: for or while 2

##### !question

Explain what the code below is doing. Why is a `for` loop more suitable than a `while` loop in this case?

```javascript
var numCoins = 50;
var total = 0;
var flip;
for (var i=0; i<numCoins;i++) {
  flip = Math.random();
  if (flip > 0.5) {
    total++;
    flip = Math.random();
  }
}


console.log("Number of times heads came up out of " + numCoins + ": " + total);
```

##### !end-question

##### !placeholder

Why is `for` better than `while` here?

##### !end-placeholder

##### !explanation

Because we want to flip a specific number of coins that we know in advance, a `for` loop is more appropriate here.

##### !end-explanation

### !end-challenge



## Conclusion

Now you've learned to make some dynamic programs, that can respond to user input and change how they respond accordingly. You're well on your way to making some really complex programs!