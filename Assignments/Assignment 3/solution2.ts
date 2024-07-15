/* 
2. Write a TypeScript class called Person with properties name and age. Implement a constructor that initializes these properties when a
     Person object is created. Then, create a derived class Employee that extends Person. Override the constructor of the Employee class to
       include an additional property employeeId.   */

       class PersonClass{
        name:string;
        age:number;


        constructor(name:string,age:number){
            this.name= name;
            this.age = age;

            console.log("Base Class....")
        }
       }

       class Employee extends PersonClass{
        employeeId:number;

        constructor(name:string,age:number,employeeId:number){
          console.log("Overriding constructor of Employee class")
            super(name,age)
            this.employeeId = employeeId;
           
        }

       }

    //    let objPerson:PersonClass = new PersonClass("Shashi Gupta", 24);
    //    console.log(objPerson.name);
    //    console.log(objPerson.age);
       let objEmployee : Employee = new Employee("Suman", 19,1)
      console.log( objEmployee.name)
      console.log( objEmployee.age)
      console.log( objEmployee.employeeId)
