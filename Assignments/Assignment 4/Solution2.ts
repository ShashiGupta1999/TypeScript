//2. Write a TypeScript program to check a credit card number using regular expression
let regExpression2 = /^4[0-9]{15}$/;

let String3 = '4234678909898796';

let vBoolean3 = regExpression2.test(String3);
console.log(' regExpression2.test(String3) = ', vBoolean3);