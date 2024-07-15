/*
12. Write a TypeScript program that declares a variable as type any and uses a type assertion to explicitly cast it to type string. */
var explicitly;
explicitly = { name: "Shashi", age: 24 };
var personString = explicitly;
console.log("Person as String =", personString);
