//5. Write a program to demonstrate the need for upcasting.
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
var Shapes = /** @class */ (function () {
    function Shapes(name) {
        this.name = name;
    }
    return Shapes;
}());
var CircleDerivedClass = /** @class */ (function (_super) {
    __extends(CircleDerivedClass, _super);
    function CircleDerivedClass(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    CircleDerivedClass.prototype.CalculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    CircleDerivedClass.prototype.CalculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return CircleDerivedClass;
}(Shapes));
var RectangleDerivedClass = /** @class */ (function (_super) {
    __extends(RectangleDerivedClass, _super);
    function RectangleDerivedClass(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleDerivedClass.prototype.CalculateArea = function () {
        return this.width * this.height;
    };
    RectangleDerivedClass.prototype.CalculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return RectangleDerivedClass;
}(Shapes));
var TriangleDerivedlass = /** @class */ (function (_super) {
    __extends(TriangleDerivedlass, _super);
    function TriangleDerivedlass(name, sideA, sideB, sideC) {
        var _this = _super.call(this, name) || this;
        _this.sideA = sideA;
        _this.sideB = sideB;
        _this.sideC - sideC;
        return _this;
    }
    TriangleDerivedlass.prototype.CalculateArea = function () {
        var s = (this.sideA + this.sideB + this.sideC) / 2;
        var area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
        return area;
    };
    TriangleDerivedlass.prototype.CalculatePerimeter = function () {
        var perimeter = this.sideA + this.sideB + this.sideC;
        return perimeter;
    };
    return TriangleDerivedlass;
}(Shapes));
var objabstractShapes = new CircleDerivedClass("Circle", 4);
console.log("AREA OF Circle is ", objabstractShapes.CalculateArea());
console.log("Perimeter of Circle is ", objabstractShapes.CalculatePerimeter());
objabstractShapes = new RectangleDerivedClass("Rectangle", 6, 5);
console.log("AREA OF Rectangle is ", objabstractShapes.CalculateArea());
console.log("Perimeter of Rectangle is ", objabstractShapes.CalculatePerimeter());
objabstractShapes = new TriangleDerivedlass("Triangle", 3, 4, 5);
console.log("AREA OF Triangle is ", objabstractShapes.CalculateArea());
console.log("Perimeter of Triangle is ", objabstractShapes.CalculatePerimeter());
//    let objDerivedCircle:CircleDerived = new CircleDerived("Circle", 7)
//    console.log("AREA OF Circle is ", objDerivedCircle.CalculateArea())
//    console.log("Perimeter of Circle is ",objDerivedCircle.CalculatePerimeter())
//    let objDerivedRectangle:RectangleDerived = new RectangleDerived("Rectangle", 7, 8)
//    console.log("AREA OF Rectangle is ", objDerivedRectangle.CalculateArea())
//    console.log("Perimeter of Rectangle is ",objDerivedRectangle.CalculatePerimeter())
//    let objDerivedTriangle:TriangleDerived = new TriangleDerived("Triangle", 3,4,5)
//   console.log("AREA OF TRIANGLE is "+  objDerivedTriangle.CalculateArea())
//   console.log("Perimeter of Triangle is "+ objDerivedTriangle.CalculatePerimeter())
