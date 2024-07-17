//4. Write a TypeScript function to check whether a given value is IP value or not using regular expression
var regExpression = /^[0-9]{3}\.$/;
var String1 = '255.255.255';
var vBoolean = regExpression.test(String1);
console.log(' regExpression.test(String1) = ', vBoolean);
