/*
3. Write a TypeScript program that creates a class called Shape with properties color and a method draw(). This program prints a message
     indicating that the shape is being drawn. Then, create a derived class Circle that extends Shape. Override the draw() method in the Circle
       class to provide a specific implementation for drawing a circle.  */
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
var ShapeClass = /** @class */ (function () {
    function ShapeClass() {
    }
    ShapeClass.prototype.draw = function () {
        console.log("Shape is being drawn");
    };
    return ShapeClass;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log("Circule is being drawn");
        _super.prototype.draw.call(this);
    };
    return Circle;
}(ShapeClass));
var objCircle = new Circle();
objCircle.draw();
