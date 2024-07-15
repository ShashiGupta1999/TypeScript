/* 5. Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound().
     Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each
       animal makes. */
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
var abstractAnimal = /** @class */ (function () {
    function abstractAnimal(name) {
        this.name = name;
    }
    return abstractAnimal;
}());
var derivedTiger = /** @class */ (function (_super) {
    __extends(derivedTiger, _super);
    function derivedTiger(name) {
        return _super.call(this, name) || this;
    }
    derivedTiger.prototype.makeSound = function () {
        console.log("".concat(this.name, " is roaring"));
    };
    return derivedTiger;
}(abstractAnimal));
var derivedLion = /** @class */ (function (_super) {
    __extends(derivedLion, _super);
    function derivedLion(name) {
        return _super.call(this, name) || this;
    }
    derivedLion.prototype.makeSound = function () {
        console.log("".concat(this.name, " is roaring"));
    };
    return derivedLion;
}(abstractAnimal));
// upcasting
var refabstractAnimal = new derivedLion("Lion");
refabstractAnimal.makeSound();
refabstractAnimal = new derivedTiger("Tiger");
refabstractAnimal.makeSound();
