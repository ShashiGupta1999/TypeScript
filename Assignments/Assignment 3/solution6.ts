/* 6. Write a TypeScript program that creates an abstract class GeometricShape with properties like name and abstract methods for calculating area
     and perimeter. Implement derived classes for specific shapes (e.g., Circle, Rectangle, Triangle) that extend GeometricShape and provide
       concrete implementations for area and perimeter calculations.   */

       abstract class GeometricShape{

        name:string;

        constructor(name:string){
          this.name = name;
        }

        abstract CalculateArea():number

        abstract CalculatePerimeter():number
       }

       class CircleDerived extends GeometricShape{
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

       class RectangleDerived extends GeometricShape{

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

       class TriangleDerived extends GeometricShape{
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

       let objDerivedCircle:CircleDerived = new CircleDerived("Circle", 7)
       console.log("AREA OF Circle is ", objDerivedCircle.CalculateArea())
       console.log("Perimeter of Circle is ",objDerivedCircle.CalculatePerimeter())

       let objDerivedRectangle:RectangleDerived = new RectangleDerived("Rectangle", 7, 8)
       console.log("AREA OF Rectangle is ", objDerivedRectangle.CalculateArea())
       console.log("Perimeter of Rectangle is ",objDerivedRectangle.CalculatePerimeter())

       let objDerivedTriangle:TriangleDerived = new TriangleDerived("Triangle", 3,4,5)
      console.log("AREA OF TRIANGLE is ", objDerivedTriangle.CalculateArea())
      console.log("Perimeter of Triangle is ", objDerivedTriangle.CalculatePerimeter())

