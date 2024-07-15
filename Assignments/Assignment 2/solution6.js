/*
6. Write a TypeScript class called BankAccount with the following properties and methods:
        private accountNumber: string
        protected balance: number
    The class should have a constructor that accepts an account number and initializes the balance to 0. It should also include methods:
        public deposit(amount: number): void to add funds to the account.
        public withdraw(amount: number): void to deduct funds from the account.
    Only the class and its subclasses should have access to the balance property. */
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        if (balance === void 0) { balance = 0; }
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance = this.balance + amount;
            console.log("Deposited: ".concat(amount, ", New balance: ").concat(this.balance));
        }
        else {
            console.log("Deposited Amount must be positive");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance = this.balance - amount;
            console.log("Withdrawal: ".concat(amount, ", New balance: ").concat(this.balance));
        }
        else {
            console.log("Withdrawal Amount must be positive and should not exceed balance");
        }
    };
    return BankAccount;
}());
var objBank = new BankAccount("SBIN0008057", 0);
objBank.deposit(1400);
objBank.withdraw(190);
