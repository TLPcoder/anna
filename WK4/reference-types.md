## Reference Types

## Objectives

* Visualize how Objects are stored and compared in memory

<iframe src="https://player.vimeo.com/video/145447330?byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Both Objects and Arrays are **Reference Types**. This means that when you create a new object or array and store it in a variable, it is created in memory and then a _reference_ to it is stored inside the variable.

Consider the following code:

```javascript
var person = {name: "Matt"};
var anotherPerson = person;

console.log(anotherPerson.name); // "Matt"
```

We've used a `var` statement to declare a variable named `person` and set it to an object literal. Next, we used another `var` statement to declare a variable named `anotherPerson` and set it to `person`.

With primitive types, each variable receives their own copy of a value. With reference types, however, they share the _same_ value in memory (pointer). In other words, `person` and `anotherPerson` are two different variables. However, since these variables are set to a reference type, they point to the same object.

Note that if we make another person object, even if it has the same keys and values, it will _not_ be equal to the original `person` object:

```javascript
var person = {name: "Matt"};
var anotherPerson = person;
var doppelganger = {name: "Matt"};

person === anotherPerson; // true;
person === doppelganger; // false;
```

This is because `person` and `doppelganger` have pointers to different objects, even though those objects have identical key-value pairs.

Think of a reference as an address - you don't pick up and move your house when people want to come over, you just tell them the address. Similarly, if two people live at the same address, they don't live in different copies of the same house. A variable with a _reference_ simply stores the address of the object.

### Mutability of Reference Types

To reinforce what we're learning about reference types, let's look at one more example.

```javascript
var person = {name: "Alexander"};
var anotherPerson = person;

person.name = "Alex";
anotherPerson.name; // ?
```

What's the `name` of `anotherPerson`? The answer is `"Alex"`. `anotherPerson` accessed our object literal and updated the `name` property on it.  When `person` wanted to read the value, it first found the object in memory, noticed that the object had a key named `name`, and retrieved its value.

Let's visualize this. [Open the JavaScript Visualizer in a new window](https://goo.gl/q9M9Ds).