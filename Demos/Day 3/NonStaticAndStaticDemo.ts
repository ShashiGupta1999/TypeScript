class StaticNonStatic{
    iNonStatic!:number;
    static iStatic:number=12;

    nonStaticMethod(){
        console.log(this.iNonStatic + " " + StaticNonStatic.iStatic)
    }

    static staticMethod(){
        let objDemo:StaticNonStatic = new StaticNonStatic();
        //console.log(this.iNonStatic + " " + StaticNonStatic.iStatic);
        console.log(objDemo.iNonStatic + " " + StaticNonStatic.iStatic);
    }

}

let objStaticNonStatic:StaticNonStatic = new StaticNonStatic();
console.log(objStaticNonStatic.iNonStatic + " " + StaticNonStatic.iStatic);

let objStNonSt:StaticNonStatic = new StaticNonStatic();
objStNonSt.iNonStatic = 12;
console.log(objStNonSt.iNonStatic + " " + StaticNonStatic.iStatic);