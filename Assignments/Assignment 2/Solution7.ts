/*7. Write a TypeScript program that creates a class called Animal with the following properties and methods:
		protected name: string
		private age: number
	The class should have a constructor that accepts name and age. Implement a method:
		public introduce(): string that returns a string introducing the animal, including its name and age.
	Ensure that the age property is accessible only within the class. */

    class Animal{
        protected name: string
		private age: number

        constructor(name:string, age:number){
            this.name = name;
            this.age = age
        }

        public introduce():string{
          return `Animal name : ${this.name}, Animal age: ${this.age} years old`
        }

       
    }

    let objAnimal = new Animal("Dog", 4)
    console.log(objAnimal.introduce());