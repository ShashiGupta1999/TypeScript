class AccessModifier{
    public iPubDataMember!:number;
    private iPriDataMember!:number;
    protected iProDataMember!:number;

    printInfo(){
        console.log(`iPubDataMember = ${this.iPubDataMember}, iPriDataMember = ${this.iPriDataMember}`);
        console.log(' iProDataMember = ' + this.iProDataMember);
    }
    createObject(){
        let objAcsMod:AccessModifier = new AccessModifier();
        objAcsMod.iPriDataMember = 21;
        objAcsMod.iProDataMember = 39;
    }
}

let objAccessModifier:AccessModifier = new AccessModifier();
/* Using an Object of the class we can access only the public information of the class 
             |-> Outside the class
*/

objAccessModifier.iPubDataMember = 21;