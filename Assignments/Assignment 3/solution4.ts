/* 4. Write a TypeScript program that defines a class called Vehicle with properties make and model. Implement a constructor that initializes 
     these properties when a Vehicle object is created. Then, create a derived class Car that extends Vehicle. Finally, create a derived 
	class SportsCar that extends Car. Ensure that properties are inherited correctly and each class has its own constructor. */

    class Vehicle{
        make:string;
        model:string;

        constructor(make:string,model:string){
            this.make = make;
            this.model = model;

            console.log("Vehicle Class is a Base class ")

        }
    }

    class Car extends Vehicle{
        constructor(make :string,model:string){
            super(make,model)
            console.log(" Car Class is a child class of Base class ")
        }

    }

    class SportCar extends Car{
       

        constructor(make :string,model:string){
           
            console.log("Sport Car Class is a Grandchild class of derived class ")

            super(make,model)
        }


    }

    let objVehicle:Vehicle = new Vehicle("SUV", "2300Model")
  
    let objSportCar:SportCar = new SportCar("Hundai", "4500Model")