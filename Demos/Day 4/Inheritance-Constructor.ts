class BaseDemo{
    private iPriBaseMember:number=12;
    public iPubBaseMember:number=21;
    protected iProBaseMember:number=39;
}

class DerivedDemo extends BaseDemo{
    private iPriDerivedMember:number=48;
    public iPubDerivedMember:number=57;
    protected iProDerivedMember:number=93;
    constructor(){  
        super();
        console.log(' Within class DerivedDemo');
    }
    printInfo(){        
        console.log(this.iPubBaseMember + " " + this.iProBaseMember);
        console.log(this.iPriDerivedMember + " " + this.iPubDerivedMember + " " + this.iProDerivedMember);

    }
}

let objDerivedDemo:DerivedDemo = new DerivedDemo();
objDerivedDemo.printInfo();