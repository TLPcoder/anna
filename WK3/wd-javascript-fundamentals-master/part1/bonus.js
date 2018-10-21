/*
The purpose of this challenge is to be able to encode and decode a string using the Caesar cipher.

https://en.wikipedia.org/wiki/Caesar_cipher

Each string character has a numeric representation called a Unicode value. For example, the character "a" has a Unicode value of 97 and the character "b" has an Unicode value of 98.

http://www.ssec.wisc.edu/~tomw/java/unicode.html#x0000

JavaScript has a pair of methods to convert characters to and from Unicode values.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint

The Caesar cipher works like this.

- Convert the character "a" to the Unicode value 97.
- Add 13 to that integer, resulting in 110.
- Convert the new Unicode value to a character, resulting in "n".

If adding 13 to a Unicode value results in a number greater than 122 (i.e. "z"), wrap back around to the start of the alphabet.

It'll take a few steps to solve this cipher. Have fun!
*/

// Define a function named caesarShiftInt that takes one argument
//    integer (number)
//
// If the integer is less than 97
//    Throw an error with the message 'Error: integer too low'
//
// If the integer is greater than 122
//    Throw an error with the message 'Error: integer too high'
//
// If the integer + 13 would be greater than 122, the Unicode value for 'z'
//    Return an integer that is "wrapped" around
//
// Otherwise
//    Return the integer plus 13
//
// For example, given 97, then return 110. And given 110, then return 97.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
function caesarShiftInt(integer) {
  // YOUR CODE HERE
}

// Define a function named caesarShiftChar that takes a one argument
//    char (string of one character)
//
// If the string is not a lowercase letter
//    Return the string as is
//
// Otherwise
//    Return the char shifted using the caesarShiftInt() function
//
// For example, given '!', then return '!'. But given 'a' or 'A', return 'n'.
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
//
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint




// Define a function named encodeMessage that takes a one argument
//    message (string)
//
// Return the encoded version of the message. For example, given
// 'Hello, there!', then return 'uryyb, gurer!'.
//
// HINT: You'll need a loop for this.




// Define a function named decodeMessage that takes a one argument
//    message (string)
//
// Return the decoded version of the message. For example, given
// 'uryyb, gurer!', then return 'Hello, there!'.
//
// HINT: Is there a way to use the encodeMessage() function?
