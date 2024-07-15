/*
2. Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a
     Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to
       include an additional property employeeId.   */
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
var PersonClass = /** @class */ (function () {
    function PersonClass(name, age) {
        this.name = name;
        this.age = age;
        console.log("Base Class....");
    }
    return PersonClass;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId) {
        var _this = this;
        console.log("Overriding constructor of Employee class");
        _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    return Employee;
}(PersonClass));
//    let objPerson:PersonClass = new PersonClass("Shashi Gupta", 24);
//    console.log(objPerson.name);
//    console.log(objPerson.age);
var objEmployee = new Employee("Suman", 19, 1);
console.log(objEmployee.name);
console.log(objEmployee.age);
console.log(objEmployee.employeeId);
