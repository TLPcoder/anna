## Objects

In JavaScript Objects are "any collection of data stored as keys and values". An object's _keys_ are the strings used to access it's _values_. In Ruby this data structure is called a _hash map_, or `hash` and in Python it's called a _Dictionary_, or `dict`.

## Objectives

* Create and manipulate Objects
* Use both Object Key Notations: _dot notation_ and _bracket notation_
* Describe the function and use of common native methods for Objects
* Write a deeply nested object
* Read data from a deeply nested object

### Key-value pairs

We're going to declare a variable named `person` and set it to an empty **object literal**:

```javascript
var person = {};
```

Objects start with an open curly brace and end with a closing curly brace. Inside of these braces, we store data as **key-value pairs**. The **key** is similar to an **index** of an array. The **value** is similar to a **value** in an array.

Here's an example of an object literal with one key-value pair:

```javascript
var person = {
  firstName: "Bruce"
};
```

The key-value pair is separated with a colon. The key is written _with or without quotes_, and the value is written as a desired data type, such as the string `"Bruce"`. Keys without quotes are restricted to _valid JavaScript variable names_.

If we store more than one key-value pair, each pair must be separated with a comma. The value of the key-value pairs, as you'll notice, can have a value type of either primitive or reference.

```javascript
var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
```

In the example above, our _keys_ are `firstName`, `lastName`, and `favoriteColors`. The _values_ for those keys are `"Bruce"`, `"Wayne"`, and `["black", "yellow"]` respectively.


### !challenge

* type: code-snippet
* language: javascript
* id: be21c7f6-16b1-43c6-a728-a6880badcac8
* title: Create your own person object

##### !question

Create an object called `person` that represents you. It should have the _keys_ `name`, `age` and `favoritePasta`. Add your own _values_.

##### !end-question

### !placeholder

var person = null;

### !end-placeholder

### !tests

```js
describe('person', function() {

    it("has a name property", function() {
      expect(person.name, "Does not have a name property").to.exist
    })

    it("has an age property", function() {
      expect(person.age, "Does not have a age property").to.exist
    })

    it("has a favoritePasta property", function() {
      expect(person.favoritePasta, "Does not have a favoritePasta property").to.exist
    })

})
```
### !end-tests

### !end-challenge

### Dot notation vs. square bracket notation (Creation)

We've declared a variable named `cat` and assigned it an empty object literal. How do we add key-value pairs to `cat`? We have two options: _dot notation_ and _square bracket notation_.

Dot notation works the following way:

```javascript
var cat = {};
cat.firstName = "Felix";
cat.lastName = "The Cat";

console.log(cat);
// {firstName: "Felix", lastName: "The Cat"}
```

When using dot notation, the keys are placed after the dot. The corresponding values of the keys become the right operand of the equality operator. One note of caution about the keys: they must be a valid identifier. In other words, they must conform to these rules:

- the name must begin with a `$`, `_`, or alphabet character
- after the first character, any of the above plus numeric characters

In the case that the key isn't a valid identifier (or even if it is a valid identifier), we may use square bracket notation:

```javascript
var cat = {};
cat["first name"] = "Felix";
cat["last name"] = "The Cat";

console.log(cat);
// {'first name': 'Felix', 'last name': 'The Cat'}
```

Above, the keys are considered invalid due to the white space in their names. To circumvent this problem, we enclose the invalid identifier in quotation marks. Then, we enclose that string inside of square brackets.

### Dot notation vs. square bracket notation (Access)

To read the value of a key-value pair, we need to use dot notation or square bracket notation:

```javascript
var cat = {};
cat.firstName = "Felix";
cat.lastName = "The Cat";

console.log(cat);
// {firstName: "Felix", lastName: "The Cat"}

console.log(cat.firstName);  // "Felix"
console.log(cat["firstName"]); // "Felix"

console.log(cat.lastName); // "The Cat"
console.log(cat["lastName"]); // "The Cat"
```

Notice that we had to use quotation marks with the square bracket notation. If we didn't include the quotation marks, the JavaScript interpreter would mistake `firstName` and `lastName` to be variables, the contents of which are not associated with the `cat` object. An example will help elaborate this point:

```javascript
var cat = {
	firstName: "Felix",
	lastName: "The Cat"
};

var firstName = "Boooo";

console.log(cat.firstName);  // "Felix"
console.log(cat["firstName"]);  // "Felix"
console.log(cat[firstName]); // undefined (analogous to cat["Boooo"])

var foo = "firstName";
console.log(cat.foo); // undefined (cat has no value corresponding to the key of foo!)
console.log(cat[foo]); // "Felix"
```

### !challenge

* type: short-answer
* id: db23d4f9-fdec-4897-83ee-e27dd2186f85
* title: Access Objects Exercise

##### !question

How can we get Bruce Wayne's second favorite color?

```javascript
var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
```

##### !end-question

##### !answer

/person(\..+|(\[['"].+['"])\])\[1\];?/

##### !end-answer

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### Updating key-value pairs

```javascript
var cat = {};
cat.firstName = "Felix";
cat.lastName = "The Cat";
console.log(cat);
// {firstName: 'Felix', lastName: 'The Cat'}
cat['firstName'] = "Cat";
cat['lastName'] = "Fritz";
console.log(cat);
// {firstName: 'Cat', lastName: 'Fritz'}
```

### !challenge

* type: short-answer
* id: 1301816d-6ad8-40d7-b35d-9f6907a6c1e3
* title: Update Objects Exercise

##### !question

How can we update Bruce Wayne's second favorite color to pink?

```javascript
var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
```

##### !end-question

##### !answer

/person(\..+|(\[['"].+['"])\])\[1\] = ['"][Pp]ink['"];?/

##### !end-answer

##### !placeholder

Write JavaScript code here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### Delete key-value pairs

We can delete a key-value pair with the following syntax:

```
var person = {
  firstName: "Bruce",
  lastName: "Wayne"
};

delete person.firstName;

person
// {lastName: "Wayne"};
```

Deleting requires us to include the keyword `delete` in front of a key-value pair.

### !challenge

* type: short-answer
* id: 40c1af5a-72c7-4917-a240-57b0830e39e9
* title: The delete keyword

##### !question

Help hide our superhero's identity by deleting any identifying information from this object:

```
var superHero = {
	name : "Bruce Wayne",
	alias: "Batman"
}
```

##### !end-question

##### !answer

/delete superHero(\.name|(\[['"]name['"])\]);?/

##### !end-answer

##### !placeholder

Delete the key...

##### !end-placeholder

##### !explanation

Great! now you know how to delete keys from objects!

##### !end-explanation

### !end-challenge

## Native Object methods

Similar to arrays, objects have access to default properties and methods. Let's explore the two most frequently used:

- `.hasOwnProperty([key])`
- `Object.keys([object])`

### `hasOwnProperty([key])`

This method accepts a string as a value and returns a Boolean value if that string is a key of an object.

```javascript
var person = {name: "Watson"};

// true
person.hasOwnProperty("name");

// false
person.hasOwnProperty("height");
```

### `Object.keys([object])`

Notice the capital `O` in `Object`. The value in keys is the actual object you want to get the keys of. This method returns all the keys of an object. Until now, we lacked a convenient way to achieve this task. When used, this method will return each key of an object as an item in an array.

```javascript
var person = {
	firstName: "Bruce",
	lastName: "Wayne"
};

Object.keys(person);
// ["firstName", "lastName"]
```

## Creating Nested Values

In the near future, you'll find yourself working with nested reference types. This describes deeply nested values, such as an array storing objects, which store objects and arrays, which can store more arrays, etc.

```javascript
var superheroes = [
	{
    name: "Spider-Man",
		alterEgo: {
			first: "Peter",
			last: "Parker"
		},
		age: 15,
		address: {
			country: "USA",
			city: "New York"
		},
		favoriteColors: ["blue", "red"]
	},
	{
    name: "Batman",
		alterEgo: {
			first: "Bruce",
			last: "Wayne"
		},
		age: 32,
		address: {
			country: "USA",
			city: "Gotham"
		},
		favoriteColors: ["black", "yellow"]
	}
];

people[1].alterEgo.first; // "Bruce"
people[0].favoriteColors[1]; // "red"
people[1].age; // 32
```

## Reading Nested Values

Reading deeply nested values is a very important technique. If you want to include tweets in one of your future web apps, daily forecasts, or most other data from a third-party source of data, you'll need to know how to read deeply nested data.

For this reason, you need to gain comfort navigating and finding data anywhere in a deeply nested value.

Take this deeply nested reference type and write the code to find the following values:

1. The email of user 1.
2. The title of user 5.
3. The user id of the first user in the users array.

```javascript
let data = {
  users:[
    {
      user_id: 1,
      name: "Chris Rivers",
      mention_name: "chris",
      email: "chris@hipchat.com",
      title: "Developer",
      photo_url: "https:\/\/www.hipchat.com\/chris.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "away",
      status_message: "gym, bbl",
      is_group_admin :1,
      is_deleted :0
    },
    {
      user_id: 3,
      name: "Peter Curley",
      mention_name: "pete",
      email: "pete@hipchat.com",
      title: "Designer",
      photo_url: "https:\/\/www.hipchat.com\/pete.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "offline",
      status_message: "",
      is_group_admin: 1,
      is_deleted: 0
    },
    {
      user_id: 5,
      name: "Garret Heaton",
      mention_name: "garret",
      email: "garret@hipchat.com",
      title: "Co-founder",
      photo_url: "https:\/\/www.hipchat.com\/garret.png",
      last_active: 1360031425,
      created: 1315711352,
      status: "available",
      status_message: "Come see what I'm working on!",
      is_group_admin: 1,
      is_deleted: 0
    }
  ]
};
```


### !challenge

* type: short-answer
* id: 5666f647-e8c2-41fc-8f3b-dc6762ed0460
* title: user 1 email access

##### !question

Write the JavaScript to access the email of user 1.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[0\](\.email|(\[['"]email['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: e2a1db07-5133-4540-872f-1f3459fccf1c
* title: title user 5

##### !question

Write the JavaScript to access the title of user 5.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[2\](\.title|(\[['"]title['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

### !challenge

* type: short-answer
* id: 32ba008c-5209-43b7-9316-6ff928ce32b8
* title: first user id

##### !question

Write the JavaScript to access the user id of the first user in the users array.

##### !end-question

##### !answer

/data(\.users|(\[['"]users['"])\])\[0\](\.user_id|(\[['"]user_id['"])\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge

Consider this example, courtesy of [Desmos.com](http://www.desmos.com):

```javascript
var graphObject = {
  version:1,
  graph:{
    viewport:{
      xmin:-10,
      ymin:-3.367158671586716,
      xmax:10,
      ymax:3.367158671586716
    }
  },
  expressions:{
    list:[
      {
        id:"1",
        type:"expression",
        latex:"y=x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#C0504D",
        style:"normal"
      }, {
        id:"2",
        type:"expression",
        latex:"y=2x",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#4F81BD",
        style:"normal"
      }, {
        id:"4",
        type:"text",
        text:"Access me!"
      }, {
        id:"5",
        type:"expression",
        latex:"",
        domain:{
          min:0,
          max:1
        },
        hidden:false,
        color:"#8064A2",
        style:"normal"
      }
    ]
  }
};
```

### !challenge

* type: short-answer
* id: 5b905acd-e80c-45d2-bc02-af6064b237bb
* title: access "access me"

##### !question

Write the JavaScript to access the text "Access me!" from the object above.

##### !end-question

##### !answer

/graphObject(\.expressions|\[["']expressions['"]\])(\.list|\[['"]list['"]\])\[2\](\.text|\[['"]text["']\]);?/

##### !end-answer

##### !placeholder

Write JavaScript statement here...

##### !end-placeholder

##### !explanation

##### !end-explanation

### !end-challenge