/* 1. Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when
    a Bus object is created. */
var Bus = /** @class */ (function () {
    function Bus(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Bus.prototype.displayProperties = function () {
        console.log("Bus Properties : make: ".concat(this.make, " ,model: ").concat(this.model, ",year: ").concat(this.year));
    };
    return Bus;
}());
var myBus = new Bus("SUV", "7900Model", 2022);
myBus.displayProperties();
