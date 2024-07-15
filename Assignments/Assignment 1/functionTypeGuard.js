/*
9. Write a TypeScript function that takes an argument of type string | number. Inside the function, use a type guard to check whether the
     argument is a string or a number. Then, log the appropriate message accordingly.  */
function typeGuard(parameter) {
    if (typeof parameter === "string") {
        console.log("Parameter is string");
    }
    else if (typeof parameter === "number") {
        console.log("Parameter is a number");
    }
    else {
        console.log("Invalid parameter");
    }
}
typeGuard("Hello Function");
typeGuard(56);
