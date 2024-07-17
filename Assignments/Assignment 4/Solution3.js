//3. Write a pattern that matches e-mail addressess using regular expression
var regExpression1 = /^[a-zA-Z0-9]+@gmail\.com$/;
var String2 = 'shashigupta@gmail.com';
var vBoolean1 = regExpression1.test(String2);
console.log(' regExpression1.test(String2) = ', vBoolean1);
