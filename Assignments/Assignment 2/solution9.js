/*  Write a TypeScript program that creates a class with static methods for common mathematical operations, such as add, subtract, multiply, and
    divide. Each method should accept two numbers as parameters and return the operation result. Test the class by performing various
    mathematical operations using its static methods. */
var Operations = /** @class */ (function () {
    function Operations() {
    }
    Operations.add = function (num1, num2) {
        Operations.totalSum = num1 + num2;
        console.log("Sum =", Operations.totalSum);
    };
    Operations.sub = function (num1, num2) {
        Operations.totalSub = num1 - num2;
        return "Subtraction : ".concat(Operations.totalSub);
    };
    Operations.mul = function (num1, num2) {
        Operations.totalMul = num1 * num2;
        console.log("Multiplication =", Operations.totalMul);
    };
    Operations.divide = function (num1, num2) {
        Operations.totalDivide = num1 / num2;
        console.log("Divide = ", Operations.totalDivide);
    };
    return Operations;
}());
Operations.add(12, 45);
console.log(Operations.sub(56, 23));
Operations.mul(12, 4);
Operations.divide(56, 4);
