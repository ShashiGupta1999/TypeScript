/*  Write a TypeScript class called Singleton that follows the Singleton design pattern. The class should have a private static instance of
     itself and a static method getInstance() that returns the instance. Ensure that only one instance of the class can be created. Test
      the Singleton pattern by creating multiple instances and checking if they are the same instance. */
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();
console.log(instance1 === instance2);
