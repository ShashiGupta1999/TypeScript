/* 
3. Write a TypeScript program that creates a class called Shape with properties color and a method draw(). This program prints a message
     indicating that the shape is being drawn. Then, create a derived class Circle that extends Shape. Override the draw() method in the Circle
       class to provide a specific implementation for drawing a circle.  */

       class ShapeClass{
        color:string;

        draw(){
            console.log("Shape is being drawn")
        }
       }

       class Circle1 extends ShapeClass{
        draw(){
            console.log("Circule is being drawn")
            super.draw()
        }
       }

       let objCircle1:Circle1 = new Circle1()
       objCircle1.draw()