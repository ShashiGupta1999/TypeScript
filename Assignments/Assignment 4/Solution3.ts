
//3. Write a pattern that matches e-mail addressess using regular expression

let regExpression1 = /^[a-zA-Z0-9]+@gmail\.com$/;

let String2 = 'shashigupta234@gmail.com';

let vBoolean1 = regExpression1.test(String2);
console.log(' regExpression1.test(String2) = ', vBoolean1);