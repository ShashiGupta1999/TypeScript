//5. Write a program to demonstrate the need for upcasting.


       abstract class Shapes{

        name:string;

        constructor(name:string){
          this.name = name;
        }

        abstract CalculateArea():number

        abstract CalculatePerimeter():number
       }

       class CircleDerivedClass extends Shapes{
          radius:number

          constructor(name:string,radius:number){
            super(name)
            this.radius = radius;
          }

        CalculateArea():number {
         
          return Math.PI * this.radius * this.radius;
            
        }

        CalculatePerimeter():number {
         
          return 2 * Math.PI * this.radius
            
        }


       }

       class RectangleDerivedClass extends Shapes{

        width:number;
        height:number;

        constructor(name:string, width:number, height:number){
          super(name)
          this.width=width
          this.height = height

         
        }
       CalculateArea():number {
        
         return this.width * this.height;
            
        }

        CalculatePerimeter():number {
         
         
          return 2*( this.width + this.height)
            
        }

       

       }

       class TriangleDerivedlass extends Shapes{
        sideA:number;
        sideB:number;
        sideC:number;

        constructor(name:string, sideA:number, sideB:number, sideC:number){
          super(name)
          this.sideA = sideA;
          this.sideB = sideB;
          this.sideC - sideC;
        }

        CalculateArea():number {
          const s = (this.sideA + this.sideB + this.sideC)/2
         
         const area =  Math.sqrt(s*(s-this.sideA) * (s-this.sideB) * (s-this.sideC))
         return area;
            
        }
        

        CalculatePerimeter():number {
         
          const perimeter = this.sideA + this.sideB + this.sideC;
          return perimeter;
           
            
        }

       

       }

       let objabstractShapes:Shapes = new CircleDerivedClass("Circle", 4)
       console.log("AREA OF Circle is ", objabstractShapes.CalculateArea())
       console.log("Perimeter of Circle is ",objabstractShapes.CalculatePerimeter())

       objabstractShapes = new RectangleDerivedClass("Rectangle", 6,5)
       console.log("AREA OF Rectangle is ", objabstractShapes.CalculateArea())
       console.log("Perimeter of Rectangle is ",objabstractShapes.CalculatePerimeter())

       objabstractShapes = new TriangleDerivedlass("Triangle",3,4,5)
       console.log("AREA OF Triangle is ", objabstractShapes.CalculateArea())
       console.log("Perimeter of Triangle is ",objabstractShapes.CalculatePerimeter())




