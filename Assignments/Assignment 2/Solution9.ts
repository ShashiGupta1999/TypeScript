/*  Write a TypeScript program that creates a class with static methods for common mathematical operations, such as add, subtract, multiply, and 
	divide. Each method should accept two numbers as parameters and return the operation result. Test the class by performing various 
	mathematical operations using its static methods. */

    class Operations{
        static totalSum:number;
        static totalSub:number;
        static totalMul:number;
        static totalDivide:number;


        static add(num1:number, num2:number){
            Operations.totalSum = num1 + num2;
            console.log("Sum =" , Operations.totalSum)

        }
        static sub(num1:number, num2:number){
            Operations.totalSub = num1 - num2;
            return `Subtraction : ${Operations.totalSub}`

        }
        static mul(num1:number, num2:number){
            Operations.totalMul = num1 * num2;
            console.log("Multiplication =" , Operations.totalMul)

        }
        static divide(num1:number, num2:number){
            Operations.totalDivide = num1 / num2;
            console.log("Divide = " , Operations.totalDivide)

        }
    }
    Operations.add(12,45)
    console.log(Operations.sub(56,23))
    Operations.mul(12,4)
    Operations.divide(56,4)