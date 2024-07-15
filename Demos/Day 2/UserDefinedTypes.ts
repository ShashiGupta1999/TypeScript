var jsObject = {iEno:12,name:"Magesh Babu"};

var iNumber!:number;

class ClassDemo{
    iNumber:number = 12;
    // We use Assertion operator to forcibly indicate the TSC that this datamember will have an explicit assignment
    sName!:string;
}
var objClassDemo:ClassDemo = new ClassDemo();

interface AddProperties{
    iNo:number,
    myName:string,
    isEmployee:boolean
}

var emptyObject = {} as AddProperties;
emptyObject.iNo = 12;
emptyObject.myName = "Magesh Babu";
emptyObject.isEmployee = true;


console.log(emptyObject);


enum daysOfWeek{
    SUN,
    MON,
    TUE,
    WED,
    THU,
    FRI,
    SAT
}
//We need assign only specific value to a variable
let iDay:daysOfWeek = daysOfWeek.MON;
console.log(' iDay = ' + iDay);
iDay = 6;