abstract class Shape{
    abstract area():void;
}
class Circle extends Shape{
    area(){
       console.log(' Area of circle ');
    }
}
class Square extends Shape{
    area(){
       console.log(' Area of Square ');
    }
    enoughForTheDay(){

    }
}
let objCircle:Circle = new Circle();
objCircle.area();

/* 
    Upcasting : When we make a base class reference to point to the derived class   
        object 
*/
let refShape:Shape = new Circle();
//refShape.enoughForTheDay();


refShape = new Square();

refShape.area();