/* Write a TypeScript class called Student with properties name and age. Implement a constructor that initializes these properties when a Student
     object is created. Additionally, add validation to ensure that the age provided is a positive number. If the age is not positive, set it to
      a default value of 0. */

      /* 2. Write a TypeScript program that creates a class called Student with properties name and class. Implement a constructor that initializes these
	 properties when a Student object is created.   */

     class Student1{
        name!:string;
        age!:number

        constructor(name:string, age:number){
            this.name = name;
            this.age = age;

        }

        display(){
            if(this.age>0)
           { 
            console.log(`Student Properties: name: ${this.name}, Class: ${this.age}`)
        }else{
            console.log("Invalid age")
        }}


     }

     let objStudent1 = new Student1("Shashi Gupta", 24)
     objStudent1.display()