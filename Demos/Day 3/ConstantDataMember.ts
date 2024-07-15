const PI:number  = 3.14;

class ConstantDataMember{
    iNonConstant!:number;
    readonly iConstant:number=12;

    constructor(iTemp:number,iValue:number){
        this.iConstant = iTemp;
        this.iNonConstant = iValue;
    }

    changeDataMember(){
        this.iNonConstant = 48;
        //this.iConstant = 57;
    }
}

let objConstantDataMember:ConstantDataMember = new ConstantDataMember(12,21);
objConstantDataMember.iNonConstant = 12;
//objConstantDataMember.iConstant = 21;

