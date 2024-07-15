/* 2. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these
	 properties when a Student object is created.   */

     class Student{
        name!:string;
        Class!:string;

        constructor(name:string, Class:string){
            this.name = name;
            this.Class = Class

        }

        display(){
            console.log(`Student Properties: name: ${this.name}, Class: ${this.Class}`)
        }


     }

     let objStudent = new Student("Shashi Gupta", "Graduate")
     objStudent.display()