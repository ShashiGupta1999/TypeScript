/* 6. Write a TypeScript program that creates an abstract class GeometricShape with properties like name and abstract methods for calculating area
     and perimeter. Implement derived classes for specific shapes (e.g., Circle, Rectangle, Triangle) that extend GeometricShape and provide
       concrete implementations for area and perimeter calculations.   */
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
var GeometricShape = /** @class */ (function () {
    function GeometricShape(name) {
        this.name = name;
    }
    return GeometricShape;
}());
var CircleDerived = /** @class */ (function (_super) {
    __extends(CircleDerived, _super);
    function CircleDerived(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    CircleDerived.prototype.CalculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    CircleDerived.prototype.CalculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return CircleDerived;
}(GeometricShape));
var RectangleDerived = /** @class */ (function (_super) {
    __extends(RectangleDerived, _super);
    function RectangleDerived(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleDerived.prototype.CalculateArea = function () {
        return this.width * this.height;
    };
    RectangleDerived.prototype.CalculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return RectangleDerived;
}(GeometricShape));
var TriangleDerived = /** @class */ (function (_super) {
    __extends(TriangleDerived, _super);
    function TriangleDerived(name, sideA, sideB, sideC) {
        var _this = _super.call(this, name) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        _this.sideC - sideC;
        return _this;
    }
    TriangleDerived.prototype.CalculateArea = function () {
        var s = (this.sideA + this.sideB + this.sideC) / 2;
        var area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return area;
    };
    TriangleDerived.prototype.CalculatePerimeter = function () {
        var perimeter = this.sideA + this.sideB + this.sideC;
        return perimeter;
    };
    return TriangleDerived;
}(GeometricShape));
var objDerivedCircle = new CircleDerived("Circle", 7);
console.log("AREA OF Circle is ", objDerivedCircle.CalculateArea());
console.log("Perimeter of Circle is ", objDerivedCircle.CalculatePerimeter());
var objDerivedRectangle = new RectangleDerived("Rectangle", 7, 8);
console.log("AREA OF Rectangle is ", objDerivedRectangle.CalculateArea());
console.log("Perimeter of Rectangle is ", objDerivedRectangle.CalculatePerimeter());
var objDerivedTriangle = new TriangleDerived("Triangle", 3, 3, 5);
//  console.log(objDerivedTriangle.displayTriangleArea())
//  console.log(objDerivedTriangle.displayTrainglePeri())
console.log("AREA OF TRIANGLE is ", objDerivedTriangle.CalculateArea());
console.log("Perimeter of Triangle is ", objDerivedTriangle.CalculatePerimeter());
