/* 4. Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes
     these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived
    class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor. */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model) {
        this.make = make;
        this.model = model;
        console.log("Vehicle Class is a Base class ");
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model) {
        var _this = _super.call(this, make, model) || this;
        console.log(" Car Class is a child class of Base class ");
        return _this;
    }
    return Car;
}(Vehicle));
var SportCar = /** @class */ (function (_super) {
    __extends(SportCar, _super);
    function SportCar(make, model) {
        console.log("Sport Car Class is a Grandchild class of derived class ");
        return _super.call(this, make, model) || this;
    }
    return SportCar;
}(Car));
var objVehicle = new Vehicle("SUV", "2300Model");
console.log(objVehicle.make);
console.log(objVehicle.model);
var objSportCar = new SportCar("Hundai", "4500Model");
