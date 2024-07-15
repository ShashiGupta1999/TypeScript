/*
11. Write a TypeScript program that declares an array containing boolean, numbers and strings. Use type assertions to extract number, string and
     boolean values from the array.  */
var assertion = [true, 45, "Shashi", false, 48, "Gupta"];
var booleanAssertion = [];
var numberAssertion = [];
var stringAssertion = [];
assertion.forEach(function (item) {
    if (typeof item === "boolean") {
        booleanAssertion.push(item);
    }
    else if (typeof item === "number") {
        numberAssertion.push(item);
    }
    else if (typeof item === "string") {
        stringAssertion.push(item);
    }
});
console.log("Boolean = ", booleanAssertion);
console.log("Number = ", numberAssertion);
console.log("String = ", stringAssertion);
