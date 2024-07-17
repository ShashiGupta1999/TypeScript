class StudentInfo{
    studId:number = 29578;
    studName:string = 'Magesh Babu';
    dispStudentInfo(){
        console.log(this.studId + " " +this.studName);
    }
    print = () => {
        console.log(this.studId + " " +this.studName);
    }
}
let objStudentInfo:StudentInfo = new StudentInfo();
objStudentInfo.dispStudentInfo();
/*
console.log(objStudentInfo.studId + " " + objStudentInfo.studName);
objStudentInfo.print();
*/