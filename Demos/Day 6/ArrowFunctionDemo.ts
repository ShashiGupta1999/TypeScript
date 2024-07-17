let sStr = function(){
    console.log(' Happy : End of TypeScript Session')
}
sStr();

sStr = () => {
    console.log(' Good to go ');
}
sStr();

let anyReturn = function(iFirst,iSecond){
   return iFirst + iSecond;
}
console.log(anyReturn(12,36));

anyReturn = (iFirst,iSecond) => iFirst + iSecond;
console.log(anyReturn(12,36));