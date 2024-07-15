/* 
8. Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that
	 can be either a boolean or a number. Use a union type to achieve this. */

    function combine(param1:boolean,param2:number):boolean|number{
        if(param1){
            return param2 + 1;
        }else{
            return param2 + 2;
        }

    } 

    let result = combine(true,10)
    console.log("result when param1 is true = " , result)

    let result1 = combine(false,10)
    console.log("result when param1 is false = " , result1)