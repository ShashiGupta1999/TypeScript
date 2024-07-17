let regEx = /test/;

let sString = 'Magesh always test us during the discussion';

let bFlag = regEx.test(sString);
console.log(' regEx.test(sString) = ', bFlag);

let sStr = sString.match(regEx);
console.log(sStr)