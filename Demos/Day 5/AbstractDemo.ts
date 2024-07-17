abstract class AbstractDemo{
    constructor(){
        console.log(' Within AbstractDemo Constructor ');
    }
    concreteMethod(){
        console.log(' concreteMethod() --- AbstractDemo ');
    }
    static staticDemo():void{
        console.log(' Within staticDemo() --- AbstractDemo ');
    }
    abstract nonConcretemethod():void;
}
class DerivedDemo extends AbstractDemo{
    constructor(){
        console.log(' Within DerivedDemo Constructor ');
        super();
    }
    concreteMethod(){
        console.log(' concreteMethod() --- DerivedDemo ');
    }    
    nonConcretemethod(){
        console.log(' nonConcretemethod() -- DerivedDemo ');
    }
}
let objDerivedDemo:DerivedDemo = new DerivedDemo();
objDerivedDemo.concreteMethod();
objDerivedDemo.nonConcretemethod();
DerivedDemo.staticDemo();


