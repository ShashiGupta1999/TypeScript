
//4. Write a TypeScript function to check whether a given value is IP value or not using regular expression

let regExpression = /^[0-9]{3}\./;

let String1 = '255.255.255';

let vBoolean = regExpression.test(String1);
console.log(' regExpression.test(String1) = ', vBoolean);