/*
12. Write a TypeScript program that declares a variable as type any and uses a type assertion to explicitly cast it to type string. */

 let explicitly:any

explicitly = {name:"Shashi", age: 24}

let personString:string = explicitly as string

console.log("Person as String =" , personString)