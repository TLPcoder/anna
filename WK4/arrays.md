## Arrays

## Objectives

* Create and manipulate Arrays
* Describe the function and use of common native methods for Arrays

Arrays describe a set of elements in a particular order. Arrays in Javascript are declared using square brackets. The simplest array is one with nothing in it:

```javascript
var arr = [];
```

The syntax we're using to create our array is referred to as an **array literal**. To be more specific, we would describe the above example as an empty array literal. We call it a **literal** because we use `[]` instead of `new Array()`. We describe it as empty because arrays are designed to store sequences of data, and this has no data.

Let's create an array literal and store four strings inside of it:

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];
```

For the syntax to be valid, each value needs to be **delimited** with commas.

Note that the above array happened to have all strings in it, but in Javascript it's not necessary that each element in an array have the same type. This array is also perfectly valid:

```javascript
var junkArray = ["hi", 3, null, [1, 2, 3], true, "bye"];
```


### !challenge

* type: paragraph
* id: e93cbf50-77ac-4b95-a669-3a25ebca5ba7
* title: What are the types?

##### !question

🤔 Recall: What are the _data types_ of elements in `junkArray` above?

##### !end-question

##### !answer

##### !end-answer

##### !placeholder

List the types.

##### !end-placeholder

##### !explanation

Did you find all of these types? Here they are in order: String, Number, Null, Array (with Numbers), Boolean, String?

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: fc8c1b7b-9882-4b5e-93fd-cbd8925ae0f5
* title: Write an Array with Strings

##### !question

Write an array literal with the names of the people nearest to you as strings.

##### !end-question

##### !answer

/\[(["'].+["'])+\];?/

##### !end-answer

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### Accessing Elements

To access and read each element in the array, we need to use square bracket notation with an index. Indices (plural of Index) are always numbers.

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];

cats[0]; // "Elie"
cats[1]; // "Janey"
cats[2]; // "Matt"
cats[3]; // "Parker"
cats[4]; // "Tim"
```

Notice that the index starts with `0` and then increments by `1`. We say that arrays are _zero-indexed_ because the first element is at index 0, not at index 1.

Given the following code:

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];
var index = 3;
```
### !challenge

* type: multiple-choice
* id: 9091f601-3f74-4219-aa5c-a1779b6fcf70
* title: Using Variables to Access Arrays

##### !question

### Question

What will the expression `cats[index]` produce?

##### !end-question

##### !options


* "3"
* 3
* "Parker"
* "Tim"
* "Matt"


##### !end-options

##### !answer

"Parker"

##### !end-answer

##### !explanation

Whatever _expression_ is inside the brackets is _evaluated_, and the result is used to index into the array.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 679799cd-98e5-47f3-becb-215f3efa4fa0
* title: The answer might surprise you...

##### !question

### Question

What would happen if I specify `cats[100]`?

##### !end-question

##### !options


* "Tim"
* 100
* undefined
* RangeError


##### !end-options

##### !answer

undefined

##### !end-answer

##### !explanation

In JavaScript, accessing past the point of the end of the array will return `undefined`. In other languages, this would result in an error being thrown.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: b5fb2273-25ac-43c1-aaec-720d7abd6067
* title: Negative Numbers

##### !question

### Question

What would happen if I specify `cats[-1]`?

##### !end-question

##### !options


* SyntaxError
* "Tim"
* "Elie"
* "Janey"
* undefined


##### !end-options

##### !answer

undefined

##### !end-answer

##### !explanation

Similarly, specifying a number before the start of the first index of the array will also result in undefined.

##### !end-explanation

### !end-challenge

### `length` property

Every array has a `length` property. The `length` property stores the current length of an array.

```javascript
var cats = [];
cats.length;  // 0

cats[0] = "Sherlock";
cats.length; // 1
```

### Updating Elements

To update a value stored at a specific index, we can simply reassign the value at that index.

```javascript
var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];

cats[2] = "Mathematical Matt";

// ["Elie", "Janey", "Mathematical Matt", "Parker", "Tim"]
```

### Array checking

Unlike with most primitive data types, the `typeof` operator isn't helpful when trying to distinguish between different objects and arrays, since both are (secretly) objects in Javascript.

```javascript
typeof []; // object
typeof {}; // object
```

As of ES5, there's a simple method you can use to check whether something is an array: `Array.isArray`.

```javascript
Array.isArray([]); // true
Array.isArray({}); // false
```

## Native Array methods

Every array has access to a set of default properties and methods. Instead of exploring all of them now, we're going to explore the most frequently used, especially in the beginning:

 - `length`
 - `push([value])`
 - `pop()`
 - `slice(startIndex, endIndex)`
 - `splice(startIndex, count)`
 - `indexOf(element)`

First, **[open this link in a new window](https://goo.gl/COHJVm)**, and step through the code. It should illuminate how these methods function.

After seeing the visualization from the link above, answer these questions:

### !challenge

* type: multiple-choice
* id: a8f22a2c-6628-42d6-8044-fdd6db3437b7
* title: length

##### !question

On line 2, a variable called `catsCurrentLength` is set. Is this variable:

##### !end-question

##### !options


* A reference to the current length of the `cats` array
* A copy of the current length of the `cats` array
* A default value that doesn't mean anything


##### !end-options

##### !answer

A copy of the current length of the `cats` array

##### !end-answer

##### !explanation

Because length gives us a primitive value (a Number) instead of a reference type (Object, Array, Function), it won't stay up-to-date as the length of the array changes (check it out in the visualizer!)

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 8e8a090c-7ed2-4cba-96c0-7bd7d673829f
* title: length 2

##### !question

On line 5, `catsCurrentLength` is set to the value `3`. The largest index in the array is `2`. This is because...

##### !end-question

##### !options


* `.length` gives you the next empty index so you know where to put new elements
* `.length` was implemented incorrectly in the original JavaScript implementation
* `.length` gives you the count of elements in the array, rather than their ordinal value


##### !end-options

##### !answer

`.length` gives you the count of elements in the array, rather than their ordinal value

##### !end-answer

##### !explanation

Remember that integers are often used to convey _count_ or _position_. Length has to do with _counting_, while indexes have to do with _position_.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 99225b97-8ca9-4e30-b6f7-a9d4a2f72687
* title: Push 1

##### !question

What does `.push` do?

##### !end-question

##### !options


* Insert an element at the beginning of the array
* Insert an element at the first empty space it finds
* Insert an element at the end of the array


##### !end-options

##### !answer

Insert an element at the end of the array

##### !end-answer

##### !explanation

`.push` inserts at the end of an array, no matter what the contents of the array are.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: bc5bc0c3-3c9c-4bfe-af04-1768db3a25ce
* title: Push 2

##### !question


What value does `.push` **return**?

##### !end-question

##### !options


* The old length of the array
* The new length of the array
* The index where the element was inserted


##### !end-options

##### !answer

The new length of the array

##### !end-answer

##### !explanation

It is still preferred that the length of the array be accessed with `.length`.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 8ebbfe69-bcec-4178-a300-83b4131ece3f
* title: Pop 1

##### !question

What action does `.pop` perform?

##### !end-question

##### !options


* Remove the last element from the array
* Remove the longest element from the array
* Remove the first element from the array
* Remove the last element that was added to the array with `.push`


##### !end-options

##### !answer

Remove the last element from the array

##### !end-answer

##### !explanation

`.pop` is the reverse of `.push`!

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 223aea04-38a7-4d87-b684-8594c5282448
* title: Pop 2

##### !question


What does `.pop` **return**?

##### !end-question

##### !options


* The element that was removed from the array
* The new last element of the array
* The new length of the array
* The index the element was removed from


##### !end-options

##### !answer

The element that was removed from the array

##### !end-answer

##### !explanation

`.pop` is like removing the top (last added) card from a deck of cards, while `.push` is like adding a new card to the top of the deck. When you `.pop`, the card is now in your hand.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: 6017c556-3e8e-47bc-b73a-f70a43aaaf21
* title: Slice

##### !question

What does `.slice` do? (You *may* have to google this.)

##### !end-question

##### !options


* Removes elements from the array
* Copies elements from the array, returning a new array
* Returns a subset of the array as a new array without making a copy


##### !end-options

##### !answer

Returns a subset of the array as a new array without making a copy

##### !end-answer

##### !explanation

Slice takes 2 arguments, startIndex and stopIndex. It returns a new array with references to the elements from the old array (unless they are primitives), starting from startIndex, up to but not including stopIndex.

##### !end-explanation

### !end-challenge

### !challenge

* type: multiple-choice
* id: c189e15d-9440-4e14-8f90-7576d6ffb13e
* title: Splice

##### !question

What is the difference between `.slice` and `.splice`?

##### !end-question

##### !options


* `.splice` removes elements from the original array, while `.slice` does not
* `.splice` only copies and removes primitives, while `.slice` copies and removes everything
* `.splice` only works on the end of the array `.slice` works everywhere


##### !end-options

##### !answer

`.splice` removes elements from the original array, while `.slice` does not

##### !end-answer

##### !explanation

`.splice` actually modifies the original array, removing and returning those elements. It's interface differs too, as the second argument is not the stopIndex, but a count of how many elements to remove.

##### !end-explanation

### !end-challenge