/*4. BankAccount Class with Deposit and Withdrawal

Write a JavaScript program that creates a class called 
"BankAccount" with properties for account number and balance. 
Include methods to deposit and withdraw money from the account.
Create some instances of the "BankAccount" class, deposit some money,
and withdraw a portion of it.*/

class BankAccount{
    numberAccount;
    balance;
    constructor(numberAccount, balance){
        this.numberAccount = numberAccount;
        this.balance = balance;
    }
    depositMoney(amount){
        this.balance += amount
        return `you deposited: ${amount}. total balance: ${this.balance} in the account number: ${this.numberAccount}`
    }
    withdrawMoney(amount){
        this.balance -= amount
        return `you retired: ${amount}. total balance: ${this.balance} in the account number: ${this.numberAccount}`
    }
}
let deposite1 = new BankAccount(3013684012, 0);
console.log(deposite1.depositMoney(20000));
console.log(deposite1.withdrawMoney(1000));
