
function addNumbers(First:number,Second:number):number;
function addNumbers(First:string,Second:string):string;

function addNumbers(First:any,Second:any):any{
    let summation:any;
    summation = First + Second;
    return summation;
}

let iResult:number = addNumbers(12,36);
console.log(' iResult  = ' + iResult);
let sConcatenated:string = addNumbers('Boring', ' Discussion');
console.log(`' sConcatenated  = ${sConcatenated}'`)
//let bFlag:boolean = addNumbers(true,true);