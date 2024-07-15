interface MyInterface{
    printInfo():void;
}
interface YourInterface extends MyInterface{
    printData():void;
}
class MyDemo{
   constructor(){
     console.log(' Within class MyDemo() ');
   }
}
class MultipleInheritance extends MyDemo implements MyInterface,YourInterface{
    constructor(){
        super();
        console.log(' Within class MultipleInheritance ');
    }
    printInfo():void{

    }
    printData():void{

    }
}