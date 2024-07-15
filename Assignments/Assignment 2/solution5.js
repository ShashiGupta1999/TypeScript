/*  Write a TypeScript class called Student with the following properties and methods:
        private name: string
        protected studentId: number
    The class should have a constructor that accepts a name and student ID. Implement a method:
        public displayInfo(): void that displays the student's name and ID.
    Make sure that the studentId property is accessible only within the class and its subclasses. */
var Student5 = /** @class */ (function () {
    function Student5(name, studentId) {
        this.name = name;
        this.studentId = studentId;
    }
    Student5.prototype.displayPrivate = function () {
        console.log("Name : ".concat(this.name, ", StudentID: ").concat(this.studentId));
    };
    Student5.prototype.displayInfo = function () {
        this.displayPrivate();
    };
    return Student5;
}());
var objStudent5 = new Student5("Shashi Gupta", 1);
objStudent5.displayInfo();
