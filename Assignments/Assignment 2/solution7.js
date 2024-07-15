/*7. Write a TypeScript program that creates a class called Animal with the following properties and methods:
        protected name: string
        private age: number
    The class should have a constructor that accepts name and age. Implement a method:
        public introduce(): string that returns a string introducing the animal, including its name and age.
    Ensure that the age property is accessible only within the class. */
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.introduce = function () {
        return "Animal name : ".concat(this.name, ", Animal age: ").concat(this.age, " years old");
    };
    return Animal;
}());
var objAnimal = new Animal("Dog", 4);
console.log(objAnimal.introduce());
