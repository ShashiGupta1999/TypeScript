/*
6. Write a TypeScript class called BankAccount with the following properties and methods:
		private accountNumber: string
		protected balance: number
	The class should have a constructor that accepts an account number and initializes the balance to 0. It should also include methods:
		public deposit(amount: number): void to add funds to the account.
		public withdraw(amount: number): void to deduct funds from the account.
	Only the class and its subclasses should have access to the balance property. */

    class BankAccount{
        private accountNumber: string
		protected balance: number

        constructor(accountNumber:string, balance:number=0){
            this.accountNumber = accountNumber;
            this.balance = balance;
        }

        public deposit(amount:number):void{
           if(amount>0){
            this.balance = this.balance + amount;
            console.log(`Deposited: ${amount}, New balance: ${this.balance}`)
           }else{
            console.log("Deposited Amount must be positive")
           }
        }

        public withdraw(amount :number):void{
            if(amount > 0 && amount <= this.balance){
                this.balance = this.balance - amount;

                console.log(`Withdrawal: ${amount}, New balance: ${this.balance}`)
            }else{
                console.log("Withdrawal Amount must be positive and should not exceed balance")
            }
        }
    }

    let objBank = new BankAccount("SBIN0008057",0)
    objBank.deposit(1400);
    objBank.withdraw(190);
