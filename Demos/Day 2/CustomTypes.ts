/* 
   1. Similar to typedef in "C"
   2. Used to create Type alaises 
*/
type Student = {
    id:number,
    studName:string,
    total:number,
    isPromoted:boolean
}
var studentInfo:Student = {id:12,studName:'Magesh Babu',total:1075,isPromoted:true};

studentInfo.id = 21;
studentInfo.studName = 'Jananie';

