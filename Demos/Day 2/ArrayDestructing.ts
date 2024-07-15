let aiNumber:number[] = [10,12,14,16,18,20];

let aiCopy = aiNumber;

/* Array Destructuring */
const [iFirst,iSecond] = aiNumber;
console.log(' iFirst = ' + iFirst + ' iSecond = ' + iSecond);
const [,iTwo, ,,iFive] = aiNumber;
console.log(' iTwo  = ' + iTwo + ' ' + 'iFive = ' + iFive);
