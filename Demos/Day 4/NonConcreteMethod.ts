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