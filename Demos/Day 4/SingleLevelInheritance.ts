class BaseDemo1{
    private iPriBaseMember:number=12;
    public iPubBaseMember:number=21;
    protected iProBaseMember:number=39;

}

class DerivedDemo1 extends BaseDemo1{
    private iPriDerivedMember:number=48;
    public iPubDerivedMember:number=57;
    protected iProDerivedMember:number=93;

    printInfo(){        
        console.log(this.iPubBaseMember + " " + this.iProBaseMember);
        console.log(this.iPriDerivedMember + " " + this.iPubDerivedMember + " " + this.iProDerivedMember);

    }
}

let objDerivedDemo1:DerivedDemo1 = new DerivedDemo1();
objDerivedDemo1.printInfo();