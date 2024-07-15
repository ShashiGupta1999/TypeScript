/* 1. Write a TypeScript class called Animal with properties name and species. Implement a constructor that initializes these properties when an
    Animal object is created. Next, create a derived class Tiger that extends Animal. Add a method roar() to the Tiger class that prints a
     message indicating that the tiger is roaring.  */

     class AnimalClass{
        name:string;
        species:string;

        constructor(name:string,species:string){
            this.name = name;
            this.species=species;

            console.log("Base Class....")

        }
    }

        class Tiger extends AnimalClass{
            

            roar(){
                console.log("Derived Class....")

                console.log(`${this.name} ${this.species} is roaring`)
            }

        }
     
    let objAnimalClass:AnimalClass = new AnimalClass("Tiger" , "Panthera")
     let objtigerClass:Tiger = new Tiger(objAnimalClass.name, objAnimalClass.species)
     objtigerClass.roar()
