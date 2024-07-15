/*  Write a TypeScript class called Bus with the properties make, model, and year. Add a method start() that prints a message indicating that the
	 Bus is starting*/

     class Bus1{
        public make!:string;
        public model!:string;
        public year!:number
 
         constructor(make:string, model:string, year:number){
             this.make = make;
             this.model = model;
             this.year = year;
 
         }

        
         public start(){
             console.log(`Bus Properties : make: ${this.make} ,model: ${this.model},year: ${this.year} is starting...`)
         }
        
 
     }
 
     const myBus1 = new Bus1("SUV", "7900Model" , 2022)
     myBus1.start()