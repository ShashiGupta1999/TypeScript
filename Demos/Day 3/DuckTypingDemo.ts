const PI:number  = 3.14;

interface PropsWithinClass{
    iEno:number;
    sName:string;
    sLocation:string;
    sAddress:string;
    iAge:number;
    dSalary:number;
}

class ConstantAllDataMembers{
    readonly myProps!:PropsWithinClass
    constructor(myTempMember:PropsWithinClass){
        this.myProps.iEno = myTempMember.iEno;
        this.myProps = myTempMember;
    }

}

let objConstantAllDataMember:ConstantAllDataMembers = new ConstantAllDataMembers(12,21);
