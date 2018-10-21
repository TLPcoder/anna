# Strings

This article covers strings in more depth - explaining methods, and **Template Strings** in ES6.

## Objectives

* Write string methods to solve problems
* Perform string manipulation
* Use template strings to succinctly perform string manipulation

## Key Terms
* Immutable
* ASCII
* String Encoding
* Code Point

## Strings
Strings are a wonderful data structure that was covered first in [Variables and DataTypes](./01_Variables_and_DataTypes.md). In this article, we are told that Strings are a primitive data type. This might lead you to believe that Strings are somehow like an atomic unit of programming- not an abstraction over anything, just the idea of text. In reality, strings are a very high-level abstraction over many complex operations on an array of **Code Points**. At their lowest level, they are a series of numbers that, by agreement, [humans have decided](https://en.wikipedia.org/wiki/Unicode) means a specific letter.

Strings are simply arrays that can't be changed. Each time you reassign a string with the assignment operator (`str = "something"`) you destroy the old string and create a brand new one in it's place. This is why you can treat a String like an Array in JavaScript, but you can't reassign a letter at a location like you can with normal Arrays.

Let's look at some of the ways we can treat strings just like Arrays.

### String Methods

#### Indexing Strings

Did you know Strings can be indexed into just like Arrays?

```js
var alphabet = "abcdefghijklmnopqrstuvwxyz";

alphabet[0]; //a
alphabet[3]; //d
alphabet[3] = "e" // doesn't work, strings are immutable.
```

You can also find the `.length` of Strings, meaning you can easily loop over a String without splitting it first:

```js
var alphabet = "abcdefghijklmnopqrstuvwxyz";

for (var i=0; i<alphabet.length; i++) {
  console.log(alphabet[i]);
}
```

Arrays can be made from strings, using the `.split()` method.

```js
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var alphaArray = alphabet.split("");
var alphabetInArray = alphabet.split();
```

Splitting on an empty string will give you a new  array with each character as an element. Splitting with no arguments gives you the whole string as 1 element in a new array.

```js
var namesString = "ada alan dorothy grace";

var namesArray = names.split(" ");
// ["ada", "alan", "dorothy", "grace"]
```

Splitting on a character simply "chops up" the array, creating a new element each time that character is encountered.

Joining an existing array of strings will produce a new string, with a given string between them.

```js
var namesArray = ["ada", "alan", "dorothy", "grace"];

var namesString = namesArray.join("-");
// "ada-alan-dorothy-grace"
```

Strings have lots of operations that can be performed on them, here are a few:

- [.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [Additional Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


### Exercises

To practice, take a look at the following exercises:
- [Strings Level 1](https://github.com/gSchool/javascript-drills/blob/master/data_types/strings_1.md)
- [Strings Level 2](https://github.com/gSchool/javascript-drills/blob/master/data_types/strings_2.md)

#### Code Points
> 🌟 Elective Content - The content in this section will help you understand how Strings are actually just sequences of Numbers, and what that means.

In JavaScript, strings are sequences of numbers. How do we know what number translates to what character? There's a name for the scheme we use, called  [**UTF-16**](https://en.wikipedia.org/wiki/UTF-16). UTF ([Unicode](https://en.wikipedia.org/wiki/Unicode) Transformation Format) is what is known as a **Character Encoding**, which is a fancy name for "the agreement as to which numbers mean what characters".

There's a lot of interesting history as to how this came to be, which you can find in the wikipedia article above. The key takeaway is this:


[`String.fromCodePoint()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint) - the way to get a string from a series of numbers OR **Unicode Code Points**.

This method is a  _static method_ of the String class. That means you always call them like `String.fromCodePoint()`, rather than `"foo".fromCodePoint()`, which will fail.

[`str.codePointAt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt) - the way to get a code point at a given position in a string.

This method is an _instance method_ of the String class. That means you call it on the instance, `"foo".codePointAt(1)` rather than `String.codePointAt(1)`.

Why might we want to convert from characters to code points? There are many reasons, but one that you might consider immediately useful is this: Numbers are much simpler to do math with than strings.

Let's look at an example:

```js

function fragileEncrypt(str) {
  let newStr = '';
  for (var c in str) {
    newStr += String.fromCodePoint(str.codePointAt(c) + 5);
  }
  return newStr;
}

function fragileDecrypt(str) {
  let newStr = '';
  for (var c in str) {
    newStr += String.fromCodePoint(str.codePointAt(c) - 5);
  }
  return newStr;
}

console.log(fragileEncrypt('abcd')); // ==> 'fghi'
console.log(fragileDecrypt(fragileEncrypt('abcd'))); // ==> 'abcd'

```

`fragileEncrypt` takes in a string, converts each character to a code point, does a reversible operation on it, and then returns the string. `fragileDecrypt` does the opposite. This encryption scheme is pretty simple to break, but it is one of the earliest known methods of encrypting messages, because you can do it by hand.

### !challenge

* type: code-snippet
* language: javascript
* id: 4ea58e8c-c22d-4359-a80e-83755240b509
* title: Unicode Code Points

### !question

Given a string, write a function called `simpleEncrypt` that performs a complex, reversible operation on a string that isn't a single operation (not just `+` or `-` or `*` or `/` alone, use more than one step). Then write a function called `simpleDecrypt` that reverses it.

### !end-question

### !placeholder

function simpleEncrypt(input) {

}

function simpleDecrypt(input) {

}

### !end-placeholder

### !tests

```js
describe('simpleEncrypt and simpleDecrypt', function() {

    it("simpleEncrypt returns an encrypted string", function() {
      expect(simpleEncrypt("Ada Lovelace"), "Doesn't encrypt string").to.not.eq("Ada Lovelace")
    })

    it("simpleDecrypt returns the reverse of simpleEncrypt", function() {
      expect(simpleDecrypt(simpleEncrypt("Ada Lovelace"))).to.eq("Ada Lovelace")
      expect(simpleDecrypt(simpleEncrypt("Dorothy Vaughn"))).to.eq("Dorothy Vaughn")
    })

    it("Doesn't use simple addition", function() {
      let encryptedString = simpleEncrypt("Grace Hopper");
      function breakSimpleOperation (str) {
        for (var i = 1; i<100; i++) {
          let attemptAddition = "";
          let attemptSubtraction = "";
          let attemptMultiplication = "";
          let attemptDivision = "";
          for (var c in str) {
            let num = str.codePointAt(c);
            attemptAddition += String.fromCodePoint(num + i);
            if (num - i > 0) attemptSubtraction += String.fromCodePoint();
            attemptMultiplication += String.fromCodePoint(num * i);
            attemptDivision += String.fromCodePoint(Math.ceil(num / i));
          }
          if (attemptAddition == "Grace Hopper") return false;
          if (attemptSubtraction == "Grace Hopper") return false;
          if (attemptMultiplication == "Grace Hopper") return false;
          if (attemptDivision == "Grace Hopper") return false;
        }
        return true;
      }
      expect(breakSimpleOperation(encryptedString)).to.eq(true);
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

> 🤓🌟 Did you just get _very excited_ when we started to do cryptography? Check out [cryptopals](https://cryptopals.com/) for a really great "Getting Started" guide to Cryptography.

### String Manipulation

String Manipulation is one of the most common tasks programmers engage in. Often, you'll receive a file in a specific format, or you'll need to read a string that is written in a specific way. Let's look at some of the most common string manipulation tasks:

#### Changing the case of a letter

If you did the Code Points challenge above, you learned that in JavaScript letters are just numbers underneath. Because of this, we can add or subtract a fixed number to a letter to easily change it's case. Mapping `"a"` to `"A"` is a simple operation, and it's abstracted by the two methods `str.toUpperCase()` and `str.toLowerCase()`. These methods `return` the string they are called on, transformed to upper or lower case, respectively.

```js
var name = "eliza hamilton";

name.toUpperCase(); // returns "ELIZA HAMILTON"

name[0].toUpperCase() + name.slice(1); //returns "Eliza hamilton"

function capitalize(str) {
  return str[0].toUpperCase + str.slice(1);
}

var names = name.split(" ");
capitalize(names[0]) + " " + capitalize(names[1]); // returns "Eliza Hamilton"
```

#### Modifying Strings

Sometimes a string contains data formatted in a particular way, and we need to get it out of a string and into another, easier to manipulate data type.

`str.split()` and `str.slice()` are two methods that are very useful for reading strings.

[`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) you may have seen before- it creates a string by partitioning the string into several elements of an array. It was used in the example above, here's another example:

```js
"The quick brown fox jumps over the lazy dog".split(" ");
// ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
```

[`str.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) will give you a subsection of the string, here are some examples:

```js
var text = "abcdefghijklmnopqrstuvwxyz";
text.slice(5) // "ghijklmnopqrstuvwxyz"
text.slice(5,7) // "gh"
text.slice(3,5) // "ef"
text.slice(5,-5) // "ghijklmnopqrstu"
```

Sometimes, `str.split` can be used to divide up strings, and sometimes you only want one subsection of a string so you use `.slice`. If you don't know what numbers to put into slice, because you can't predict what the input string will look like, you can use [`str.indexOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).

```js
var text = "abcdefghijklmnopqrstuvwxyz";
text.indexOf("e"); // returns 4
text.indexOf("ijkl"); // returns 8
text.indexOf("Ada"); // returns -1 (because there is no instance of the string present)
```

### !challenge

* type: code-snippet
* language: javascript
* id: c1db0b5f-441a-4380-a8e5-fd201dd3ea18
* title: Capitalize a Sentence

### !question

Write a function called fixGrammar. It should take a string of sentences in, and it should return those sentences with proper capitalization. It should also capitalize any instance of the letter "I".

Input => Output  

```
"there's a million things i haven't done. just you wait." => "There's a million things I haven't done. Just you wait."
"there's something you learn in your first boot-camp. if they put you down somewhere with nothing to do, go to sleep — you don't know when you'll get any more." => "There's something you learn in your first boot-camp. If they put you down somewhere with nothing to do, go to sleep — you don't know when you'll get any more."
```
### !end-question

### !placeholder

function fixGrammar(input) {

}

### !end-placeholder

### !tests

```js
describe('fixGrammar', function() {

    it("Can capitalize a single sentence", function() {
      expect(fixGrammar("it's easier to ask forgiveness than it is to get permission.")).to.eq("It's easier to ask forgiveness than it is to get permission.")
    })

    it("Can capitalize both sentences", function() {
      expect(fixGrammar("there's something you learn in your first boot-camp. if they put you down somewhere with nothing to do, go to sleep — you don't know when you'll get any more.")).to.eq("There's something you learn in your first boot-camp. If they put you down somewhere with nothing to do, go to sleep — you don't know when you'll get any more.")
    })

    it("Can capitalize 'I'", function() {
      expect(fixGrammar("there's a million things i haven't done. just you wait.")).to.eq("There's a million things I haven't done. Just you wait.")
    })

    it("Can capitalize multiple sentences", function() {
      expect(fixGrammar("another one bites the dust. another one bites the dust. and another one's gone. and another one's gone. another one bites the dust.")).to.eq("Another one bites the dust. Another one bites the dust. And another one's gone. And another one's gone. Another one bites the dust.");
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 562dcf0f-bdd6-4322-8555-29a7d18ffe15
* title: Parse a QueryString

### !question

One of the most common things you'll have to write a quick function for is parsing a query string. Every web developer should know how to do this.
Given a string that's formatted like so: `?first_name=Grace&last_name=Hopper`
Output an object formatted like so:
```js
{
  "first_name" : "Grace",
  "last_name" : "Hopper"
}
```

### !end-question

### !placeholder

function parseQueryString(qs) {

}

### !end-placeholder

### !tests

```js
describe('parseQueryString', function() {

    it("returns an object", function() {
      expect(parseQueryString("")).to.deep.eq({})
    })

    it("returns an object with keys from the left side of the equals sign, and values from the right side", function() {
      expect(parseQueryString("?first_name=Grace&last_name=Hopper")).to.deep.eq({
        "first_name" : "Grace",
        "last_name" : "Hopper"
      })

      expect(parseQueryString("?first_name=Dorothy&last_name=Vaughn")).to.deep.eq({
        "first_name" : "Dorothy",
        "last_name" : "Vaughn"
      })

      expect(parseQueryString("?product=headphones&brand=Jabra")).to.deep.eq({
        "product" : "headphones",
        "brand" : "Jabra"
      })
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge


### !challenge

* type: code-snippet
* language: javascript
* id: 17914f2b-3996-40bf-b842-827e35078e96
* title: Parse CSV

### !question

One of the final tasks a master string-parser can do is parse a common format called Comma Separated Values, or CSV files. Any spreadsheet can be exported to CSV, so it's a popular format for transferring data between people who use spreadsheets and people who use databases.

Given a (possibly very long) string formatted like the example below, return an object. The keys of the object should be the values from first line of the string. You'll find a line break character (`/n`) in between lines. The values should be all the data from the column the first row is aligned with.

```
id, Product, Price, Markup, Quantity
1, "Red T-Shirt", 10, 20, 5
2, "Blue T-Shirt", 10, 20, 8
3, "Green T-Shirt", 10, 15, 15
4, "Yellow T-Shirt", 10, 20, 3
```

Should produce:

```js
{
  "id" : [1, 2, 3, 4],
  "Product" : ["Red T-Shirt", "Blue T-Shirt", "Green T-Shirt", "Yellow T-Shirt"],
  "Price" : [20, 20, 15, 20],
  "Markup" : [10, 10, 10, 10],
  "Quantity" : [5, 8, 15, 3]
}
```

Given an empty string, return an empty object.

### !end-question

### !placeholder

function parseCSV(input) {

}

### !end-placeholder

### !tests

```js
describe('parseCSV', function() {

    it("returns an object", function() {
      expect(parseCSV("")).to.deep.eq({})
    })

    it("returns an object with keys from the first line", function() {
      expect(parseCSV("id,first_name,last_name")).to.deep.eq({
        "id" : [],
        "first_name" : [],
        "last_name" : []
      })
    })

    it("returns an object with keys from the first line, and the rest of the data from their respective columns for the values", function() {
      expect(parseCSV('id, Product, Price, Markup, Quantity \n 1, "Red T-Shirt", 10, 20, 5 \n 2, "Blue T-Shirt", 10, 20, 8 \n 3, "Green T-Shirt", 10, 15, 15 \n 4, "Yellow T-Shirt", 10, 20, 3')).to.deep.eq({
        "id" : [1, 2, 3, 4],
        "Product" : ["Red T-Shirt", "Blue T-Shirt", "Green T-Shirt", "Yellow T-Shirt"],
        "Price" : [10, 10, 10, 10],
        "Markup" : [20, 20, 15, 20],
        "Quantity" : [5, 8, 15, 3]
      })

    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

#### Regular Expressions

> 🤓🌟 This is definitely Elective Content - come back to this space when you feel like a real JavaScript hot shot!

Regular expressions are like a mini-language in JavaScript. When you find strings formatted in a particular way, sometimes it's a good idea to use Regular Expressions to simplify testing if a string is in a given format. That said, Regular Expressions can quickly become difficult to parse and read, so be careful when choosing to use them.

Let's look at a _simple_ regex first. The `str.match()` method is the method we use to test whether our string matches a Regular Expression.

```js
text.match(/[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+/g)
```

This Regular Expression tests to see if the string is a valid Email. It's fairly naive, but it will generally match `foo@demo.net` and `bar.ba@test.co.uk`, which covers most email addresses. Let's break down the pieces and build up our own regex. Open [RegExr.com](http://regexr.com/) in another browser window. Open it alongside this window. This tool allows you to write a few test cases in the bottom area, and then compose a regex expression that will light up parts of the text that match when you use it. It has a really amazing reference section, and a cheatsheet as well. There are copious examples listed under the Help and Community tabs, which are great starting off points.

```js
text.match(/some regex/)
```
This part is the method on the string that does the checking. You'll notice rather than passing in something with a string, we use two slashes: `//`. In Regexr, we won't have to write the part that says `text.match`, as this tool is really only about building the expression that goes between the `//`.

```js
/[a-zA-Z0-9]/g
```
Copy and paste this code into Regexr and see what gets highlighted out of the example text.

The first thing to notice at the end is called a _Flag_, which consists of everything after the last `/`. In this case, we have the letter `g`, which means "do a search and match every part of the string, not just the first part you find that matches"

The square brackets are what is called a "character set" - what that means is anything inside of the square brackets `[]` is interpreted as a potential range of characters. `a-zA-Z0-9` means any character between little `a` and little `z`, or capital `A` and capital `Z`, or the characters from `0` to `9`. This really just means any letter or any number but not any special characters. In the Reference section of Regexr, the Character Classes section has more on character sets.

```js
/[a-zA-Z0-9]+/g
```
The plus sign after the group of characters means "one or more of the preceding token" - which means there has to be at least 1 alphanumeric character. The word _token_ here refers to "some kind of definition of what character or set of characters this can be". Notice what happens as we add the `+` sign. In the Reference section of Regexr, the Quantifiers and Alternation section shows other ways to quantify - experiment to see what happens: remove the `g` from the end, take note what changes. Change the plus to a `.` or a `*`, and take note of how the highlights change.

```js
/[a-zA-Z0-9]+\.?/g
```

To continue building up our expression, we've added some characters after the `+`. `\` is a character that typically means "escape", or "don't interpret as code, interpret literally". So, `\.` means "an actual dot". The `?` is another _quantifier_, it means "0 or 1"- essentially it means the character may or may not be there.

Currently, our expression can match any number of alphanumeric characters followed by a dot, or no dot. `this.` and `this` and `evenThis.` would match our regex.

```js
/[a-zA-Z0-9]+\.?[a-zA-Z0-9]+/g
```

You can see the next bit is just another token like the first one- any alphanumeric character. We can match any emails formatted like `firstname.lastname` with this. Next, we'll need to look for an `@` sign. The rules for an email address mean there is only one `@` sign in the whole thing, no quantifier needed. It has to be an `@` sign only, no other possibilities exist for what can come in between the name and the domain, so we can simply put a literal `@` sign right after the tokens we have before.

```js
/[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@/g
```

The `+` sign before the `@` simply refers to the range before it, and so it's not related to the `@` sign.  

Let's look at the rest of the expression:

```js
/[a-zA-Z0-9]+\.?[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+/g
```

After the `@` sign, we might have a couple of dots- any number of them really. In between the dots there will be alphanumeric characters, but we don't know how many sets of "dots and alphanumeric characters" there will be. For this, we need a "group", which takes a set of characters or character sets that occur together and considers them as a single token. `foo.co.uk` is one set of "some number of alphanumeric characters" `[a-zA-Z0-9]+` followed by two sets of "a literal dot followed by some number of alphanumeric characters" `(\.[a-zA-Z0-9]+)+`. Because the set of parenthesis, the expression "a literal dot followed by some number of alphanumeric characters" becomes a _token_ which can be used with a quantifier, `+` (meaning 1 or more).

This expression doesn't cover email addresses like `lizardbot_2000@hotmail.com` or `themillerfamily+kids-soccer@gmail.com`, because it doesn't account for underscores or `+` signs, so this regex is fairly simple. We could simplify it further, which is an exercise left for you to do on your own, with the help of [Regexr](http://regexr.com/).

### !challenge

* type: code-snippet
* language: javascript
* id: 8cfbe848-22e5-498c-88ca-dfc89b8cdad7
* title: Regex for Phone Numbers

### !question

Given a string, return true if it is formatted like a phone number.

```
"555.123.4567" // true
"+1-(800)-555-2468" // true
"12345 -98.7 " // false
```

### !end-question

### !placeholder

function phoneNumber(input) {

}

### !end-placeholder

### !tests

```js
describe('phoneNumber', function() {

    it("returns true when a number is formatted like a phone number", function() {
      expect(phoneNumber("555.123.4567")).to.eq(true)
      expect(phoneNumber("+1-(800)-555-2468")).to.eq(true)
      expect(phoneNumber("555-123-4567")).to.eq(true)
      expect(phoneNumber("(555)-123-4567")).to.eq(true)
    })

    it("returns false when it is not", function() {
      expect(phoneNumber("12345 -98.7 ")).to.eq(false)
      expect(phoneNumber("nananananananana")).to.eq(false)
    })

    it("returns false for an empty string", function() {
      expect(phoneNumber("")).to.eq(false)
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

### !challenge

* type: code-snippet
* language: javascript
* id: 9aba3415-75f0-45b5-85eb-fcbbc243cae1
* title: Regex for URL

### !question

Given a string, return true if it is formatted like a URL.

```
"www.example.com" //true
"http://example.com" //true
"http://www.example.com" //true
"http://www.example.co.uk.jp" //true
"example.com" //true
"example" //false
"example." //false
"example . com" //false
"http:example.com" //false
"http.example.com" //true
```

### !end-question

### !placeholder

function isURL(input) {

}

### !end-placeholder

### !tests

```js
describe('isURL', function() {

  it("returns true when a number is formatted like a URL", function() {
    expect(isURL("www.example.com")).to.eq(true)
    expect(isURL("http://example.com")).to.eq(true)
    expect(isURL("http://www.example.com")).to.eq(true)
    expect(isURL("http://www.example.co.uk.jp")).to.eq(true)
    expect(isURL("example.com")).to.eq(true)
    expect(isURL("http://www.example.com")).to.eq(true)
    expect(isURL("http.example.com")).to.eq(true)
  })

  it("returns false when it is not", function() {
    expect(isURL("example")).to.eq(false)
    expect(isURL("example . com")).to.eq(false)
    expect(isURL("example.")).to.eq(false)
    expect(isURL("http:example.com")).to.eq(false)
  })

  it("returns false for an empty string", function() {
    expect(isURL("")).to.eq(false)
  })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge

Now that you have a new superpower...

![](https://imgs.xkcd.com/comics/regular_expressions.png)

### Template Strings

New in ES6: Template Strings!  
Template Strings are a way we can write a string that has lots of variables, without lots of ugly string concatenation.

Template strings look like this:

```js
var name = "Mike D";
var something = "money";
var paulRevere = `The kid said "get ready, cuz this ain't funny, my name's ${name} and I'm about to get ${something}."`
```

As you can see, template strings are defined with backticks (same key as the `~` key) and replace any valid JavaScript expression inside of `${}` with it's string representation.

### !challenge

* type: code-snippet
* language: javascript
* id: 60486e25-c696-4f43-92ee-f199126f3c82
* title: Use a template string

### !question

Due to budget cuts, we'll need to cut back on the days of Christmas in this song.
Use a template string to produce the new song given the number of days as a number.

`daysOfChristmas(5)` should produce the following string:
```
On the 1st day of Christmas my true love gave to me, a partridge in a pear tree
On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree
On the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree
On the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree
On the 5th day of Christmas my true love gave to me, five golden rings four calling birds three french hens two turtle doves and a partridge in a pear tree
```

- Include line breaks with `\n`
- Don't repeat yourself!
- We'll only test up to `5`
- If no argument or `0` is given, return `"I got coal for Christmas"`

### !end-question

### !placeholder

var dayOfXmas = "day of Christmas my true love gave to me,";
var endings = ["st", "nd", "rd", "th", "th"];
var days = ["a partridge in a pear tree", "two turtle doves and", "three french hens", "four calling birds", "five golden rings"];

function daysOfChristmas(n) {

}

### !end-placeholder

### !tests

```js
describe('repeats', function() {

    it("returns one day of Christmas", function() {
      expect(daysOfChristmas(1)).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree")
    })

    it("returns two days of Christmas", function() {
      expect(daysOfChristmas(2)).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree \n On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree")
    })

    it("returns three days of Christmas", function() {
      expect(daysOfChristmas(3)).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree \n On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree \n On the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree")
    })

    it("returns four days of Christmas", function() {
      expect(daysOfChristmas(4)).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree \n On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree \n On the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree \n On the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree")
    })

    it("returns five days of Christmas", function() {
      expect(daysOfChristmas(5)).to.eq("On the 1st day of Christmas my true love gave to me, a partridge in a pear tree \n On the 2nd day of Christmas my true love gave to me, two turtle doves and a partridge in a pear tree \n On the 3rd day of Christmas my true love gave to me, three french hens two turtle doves and a partridge in a pear tree \n On the 4th day of Christmas my true love gave to me, four calling birds three french hens two turtle doves and a partridge in a pear tree \n On the 5th day of Christmas my true love gave to me, five golden rings four calling birds three french hens two turtle doves and a partridge in a pear tree")
    })

    it("returns 'I got coal for Christmas' if there are 0 or undefined arguments passed in", function() {
      expect(daysOfChristmas(0)).to.eq("I got coal for Christmas")
      expect(daysOfChristmas()).to.eq("I got coal for Christmas")
    })

    it("uses template strings", function() {
      expect(daysOfChristmas.toString()).to.contain("`")
      expect(daysOfChristmas.toString()).to.contain("${")
    })

})
```
### !end-tests

### !explanation

### !end-explanation

### !end-challenge