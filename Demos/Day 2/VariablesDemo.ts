var iNumber:number;
let iNo = "12";
iNumber = 12;
var iSum = iNumber + 12;

console.log(' iNumber = ' + iNumber);

var uVarType:number|string;
uVarType = 12;
uVarType = "12";
console.log(' uVarType  = ' + uVarType + " " + typeof uVarType );

/* 
   //'never' can be used only as a Return type of a function 
var nVar:never = null;
console.log(' nVar = ' + nVar);
*/

// Variable with type void can have only undefined value
var vVar:void = undefined;
console.log(' vVar  = ' + vVar + " " + typeof vVar);