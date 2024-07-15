class ConstructorDemo{
    iNumber!:number;
    static sStaticProp:string;
    /*
    constructor(){

    }
    */
    constructor(iTemp:number,sTemp:string){
        this.iNumber = iTemp;
        ConstructorDemo.sStaticProp = sTemp;
    }

    printInfo(){
        console.log(`iNumber = ${this.iNumber}, sStaticProp = ${ConstructorDemo.sStaticProp}`);
    }
}
let objConstructorDemo:ConstructorDemo = new ConstructorDemo(12,"Magesh Babu");
/*  objConstructorDemo.ConstructorDemo(12,"Magesh Babu"); */
objConstructorDemo.printInfo();
