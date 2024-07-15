/*
6. Write a TypeScript program that declares an array of a specific data type. It will demonstrates common array operations like adding elements,
   removing elements, and iterating through the array. */


let numbers:number[] = []

numbers.push(10)
numbers.push(20)
numbers.push(30)
numbers.push(40)

console.log("numbers in Array =" + numbers)

const numberToRemove = 20;
numbers = numbers.filter(number => number !== numberToRemove);
 
console.log("Numbers in the array after removal:", numbers);
 
console.log("Iterating through the array:");
numbers.forEach((number, index) => {
    console.log(`Number ${index + 1}: ${number}`);
});
