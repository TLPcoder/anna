# Learn By Doing: Scope, Hoisting, Higher Order Functions and Closures

Today we're going to walk through a series of short exercises together. These exercises cover tricky examples of core programming concepts in JavaScript, particularly related to scope, closures, and reference types. These are fundamental concepts, and they appear in nearly all programming languages. The specific rules from language to language are not identical, but the terminology and broad concepts are. Higher Order Functions and Closures especially are a critical aspect of __functional programming__, a paradigm that is very popular in modern front-end applications (and gaining popularity in other fields).

You may choose to tackle all of these worksheets in a single day; you could also spread these out over the course of a couple days.

### Learning Objectives:

* Use the three different kinds of scope, and describe the differences between them:
  * Global scope
  * Local scope
  * Block scope
* Identify when a variable is being "shadowed" by another variable with the same name
  * Create a name collision using local scope and block scope
* Predict the result of hoisting on the following three statements:
  * Function declarations
  * Variable declarations
  * Function expressions
* Define reference types
  * Know which data-types are reference types in JavaScript
  * Identify when a "reference" is being passed versus a "copy" being passed
  * Predict the output of the `===` operator on reference types
  * Identify a "side effect"
* Define and identify "Higher Order Functions"
  * Pass a function as an argument to another function
  * Return a function from a function
* Define and identify "Closures"
  * Identify a variable that has been "closed over"

### Instructions

We're going to work through these examples in pairs, and as a group. I suggest heading to an area of the school where instructors can move freely, and see what all the students are working on. I also recommend having the students work in pairs on the worksheets, but you may want/choose to do individual work. Suggested script:

* Pairs are formed, and students fork/clone this repo autonomously.
* For each worksheet:
  * Set a timer for about 10 minutes (or however long you think the worksheet will take your students)
  * Have the students work in pairs through each worksheet.
    * Ensure that students challenge themselves to answer the questions in the comments
    * Ensure that students are running the worksheets to check their work
    * Consider showing students `node --inspect --debug-brk script.js` to use the debugger on these scripts
  * Once time is up, or all students are finished, bring the students together and discuss the worksheet
    * Use this time to clear up misconceptions and sharpen student precision
    * Have students share and describe their code
    * Answer questions that were common during the work period
