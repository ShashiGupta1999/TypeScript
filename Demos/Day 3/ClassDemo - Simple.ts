class Employee{
    iEno!:number;
    sName!:string;
    isEmployee!:boolean;

    printInfo(){
        console.log(' Within printInfo() '); 
        console.log(' iEno = ' + this.iEno + ' sName = ' + this.sName + ' isEmployee = ' + this.isEmployee);       
    }   
}

let objEmployee:Employee = new Employee();
/* objEmployee.Employee(); */

objEmployee.iEno = 12;
objEmployee.sName = "Magesh Babu";
objEmployee.isEmployee = true;

console.log(objEmployee.sName + " " + objEmployee.isEmployee);

let objEmploye:Employee = new Employee();


console.log(objEmploye.sName + " " + objEmploye.isEmployee);
