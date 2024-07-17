//2. Write a TypeScript program to check a credit card number using regular expression
var regExpression2 = /^4[0-9]{15}$/;
var String3 = '4234678909898796';
var vBoolean3 = regExpression2.test(String3);
console.log(' regExpression2.test(String3) = ', vBoolean3);
