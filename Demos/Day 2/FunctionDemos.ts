function addNumber(iFirst:number,iSecond:number){
    console.log(arguments);
    let iSum:number = iFirst + iSecond;
    console.log(' Value of iSum = ' + iSum);
  }
  addNumber(12,21);
  console.log(' Return Value = ' + addNumber(12,21));
  
  function numberProduct(iFirst:number,iSecond:number):number{
      return iFirst * iSecond;
  }
  let iProduct:number = numberProduct(12,21);
  console.log(' iProduct = ' + iProduct);
  
  function funWithOptionalArgs(iFirst:number,iSecond?:number):void{
     console.log(' iFirst = ' + iFirst);
     console.log(' iSecond = ' + iSecond);
  }
  funWithOptionalArgs(12,21);
  funWithOptionalArgs(12);
  
  function withDefaultValues(iFirst:number,iSecond:number=12,iThird:number){
     console.log(' iFirst = ' + iFirst);
     console.log(' iSecond = ' + iSecond);
     console.log(' iThird = ' + iThird);
  }
  withDefaultValues(12,undefined,39);
  withDefaultValues(12,21,39);
  