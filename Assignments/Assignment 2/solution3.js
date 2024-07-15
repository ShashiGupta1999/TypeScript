/*  Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the
     Bus is starting*/
var Bus1 = /** @class */ (function () {
    function Bus1(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus1.prototype.start = function () {
        console.log("Bus Properties : make: ".concat(this.make, " ,model: ").concat(this.model, ",year: ").concat(this.year, " is starting..."));
    };
    return Bus1;
}());
var myBus1 = new Bus1("SUV", "7900Model", 2022);
myBus1.start();
