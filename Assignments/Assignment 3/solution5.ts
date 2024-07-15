/* 5. Write a TypeScript exercise that defines an abstract class called Animal with properties like name and an abstract method makeSound(). 
     Create derived classes (e.g., Tiger, Lion) that extend Animal and implement the makeSound() method with the unique sound each
       animal makes. */

       abstract class abstractAnimal{
        name:string;

        constructor(name:string){
          this.name = name;
        }

        abstract makeSound():void
           
       }

       class derivedTiger extends abstractAnimal{

        constructor(name:string){
            super(name)
          }
        makeSound():void{
            console.log(`${this.name} is roaring` )

        }

       }

       class derivedLion extends abstractAnimal{
        constructor(name:string){
            super(name)
          }
        makeSound():void{
            console.log(`${this.name} is roaring` )

        }
        
       }

      // upcasting
       let refabstractAnimal:abstractAnimal = new derivedLion("Lion")
     refabstractAnimal.makeSound()
      refabstractAnimal= new derivedTiger("Tiger")
       refabstractAnimal.makeSound()



        