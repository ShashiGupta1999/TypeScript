/* 1. Write a TypeScript class called Bus with the properties make, model, and year. Implement a constructor that initializes these properties when 
	a Bus object is created. */

    class Bus{
       public make!:string;
       public model!:string;
       public year!:number

        constructor(make:string, model:string, year:number){
            this.make = make;
            this.model = model;
            this.year = year;

        }

        public displayProperties(){
            console.log(`Bus Properties : make: ${this.make} ,model: ${this.model},year: ${this.year}`)
        }
    }

    const myBus = new Bus("SUV", "7900Model" , 2022)
    myBus.displayProperties()