/*
3. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action. */

var typeChecking:number;
typeChecking = 10;

console.log("Type Checking = " + typeof typeChecking)

//When run tsc typeChecking.ts error is : error TS2322: Type 'string' is not assignable to type 'number'.
//when run node typeChecking.js output is Type Checking = string