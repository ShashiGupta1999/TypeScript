/*4. Write a TypeScript program that declares a variable without specifying its type and shows how TypeScript infers the type based
on the assigned value. */

var stringVariable = "Shashi";
var stringVariableConcatenate = stringVariable + " "+ "Gupta";
console.log("Concatenate String = " + stringVariableConcatenate + " " + typeof stringVariable + " " + typeof stringVariableConcatenate)