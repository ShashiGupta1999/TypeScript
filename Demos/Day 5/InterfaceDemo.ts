interface MyInterface{
    sName:string;
    printInfo():void;
}

interface YourInterface extends MyInterface{
   dispInfo():number;
}
class InterfaceImpl implements YourInterface{
    sName = 'Magesh Babu';
    printInfo():void{
        console.log(' Within printInfo() ');
    }
    dispInfo():number{
        return 1;
    }
}

let refMyInterface:MyInterface = new InterfaceImpl();
refMyInterface.printInfo();
refMyInterface.sName = 'Magesh B';

