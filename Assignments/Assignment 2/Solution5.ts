/*  Write a TypeScript class called Student with the following properties and methods:
		private name: string
		protected studentId: number
	The class should have a constructor that accepts a name and student ID. Implement a method:
		public displayInfo(): void that displays the student's name and ID.
    Make sure that the studentId property is accessible only within the class and its subclasses. */


    class Student5{
        private name: string
		protected studentId: number

        constructor(name:string, studentId:number){
            this.name = name;
            this.studentId = studentId;
        }

        private displayPrivate(){
            console.log(`Name : ${this.name}, StudentID: ${this.studentId}`)
           
        }

        public displayInfo():void{
            this.displayPrivate()
        }
    }

    let objStudent5 = new Student5("Shashi Gupta",1)
    objStudent5.displayInfo();
