/*
8. Write a TypeScript class called Counter with a static property count initialized to 0. Implement a static method increment() that increments
     the count by 1. Implement another static method getCount() that returns the current count value. Test the class by calling both methods */
var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count += 1;
    };
    Counter.getCount = function () {
        return Counter.count;
    };
    Counter.count = 0;
    return Counter;
}());
Counter.increment();
console.log(Counter.getCount());
Counter.increment();
console.log(Counter.getCount());
Counter.increment();
console.log(Counter.getCount());
