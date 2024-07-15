/* 2. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these
     properties when a Student object is created.   */
var Student = /** @class */ (function () {
    function Student(name, Class) {
        this.name = name;
        this.Class = Class;
    }
    Student.prototype.display = function () {
        console.log("Student Properties: name: ".concat(this.name, ", Class: ").concat(this.Class));
    };
    return Student;
}());
var objStudent = new Student("Shashi Gupta", "Graduate");
objStudent.display();
