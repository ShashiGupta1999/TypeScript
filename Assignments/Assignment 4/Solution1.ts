//1. Write a TypeScript program to test whether the first character of a string is uppercase or not.

let regExpression4 = /^[A-Z]/;

let String4 = 'Shashi Gupta';

let vBoolean4 = regExpression4.test(String4);
console.log(' regExpression4.test(String4) = ', vBoolean4);