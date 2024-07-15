/* 
10. Write a TypeScript function that accepts a parameter of type number and returns a boolean indicating whether the number is odd. Use a
	 type guard to check and ensure the input is a valid number. */

     function isOddNumber(num:any): boolean{
        if(typeof num !== "number" || isNaN(num)){
           console.log("Invalid number")

        }

        return num % 2 !== 0;
    }

     console.log(isOddNumber(23))
     console.log(isOddNumber(28))