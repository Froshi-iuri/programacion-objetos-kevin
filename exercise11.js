/*11. BankAccount Class with Transfers Between Accounts

Write a JavaScript program that creates a class called BankAccount with
properties for account number, account holder name, and balance. Include
methods to deposit, withdraw, and transfer money between accounts. Create
multiple instances of the BankAccount class and perform operations such as
depositing, withdrawing, and transferring money.*/

class BankAccount{
    accountNumber;
    accountHolderName;
    accountBalance;
    constructor(accountNumber, accountHolderName, accountBalance){
        this.accountNumber = accountNumber
        this.accountHolderName = accountHolderName
        this.accountBalance = accountBalance
    }
    deposit(amount){
        this.accountBalance += amount
        return `you was deposited ${amount} in the account ${this.accountNumber}. The new balance is ${this.accountBalance}, propietary: ${this.accountHolderName}`
    }
    withdraw(amount){
        this.accountBalance -= amount
        return `you was withdraw ${amount} of the account ${this.accountNumber}. The new balance is ${this.accountBalance}. propietary: ${this.accountHolderName}`
    }
    transfer(amount, name){
        this.accountBalance -= amount
        return `you was transfered ${amount} to ${name}. The new balance is ${this.accountBalance}`
    }
}
const newInteraction = new BankAccount(3013684012, "froshi", 10000);
console.log(newInteraction.deposit(1111));
console.log(newInteraction.withdraw(1111));
console.log(newInteraction.transfer(1111, "iuri"));