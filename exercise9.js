/*9. Bank Class with Branch Management

Write a JavaScript program that creates a class called Bank 
with properties for bank names and branches. Include methods 
to add a branch, remove a branch, and display all branches. 
Create an instance of the Bank class and perform operations 
to add and remove branches.*/
class Bank{
    bank;
    allBranches = [];
    constructor (bank){
        this.bank = bank;
    }
    addBranch(branch){
        this.allBranches.push(branch)
        return `new Branches ${branch} was added in ${this.bank}`
    }
    removeBranch(branch){
        this.allBranches = this.allBranches.filter(b => b !== branch);
        return `Branches ${branch} was deleted of ${this.bank}`
    }
    displayBranchs(){
        return `all branches: ${this.allBranches}`
    }
}

const newBranches = new Bank("bancolombia")
console.log(newBranches.addBranch("norte"));
console.log(newBranches.addBranch("sur"));
console.log(newBranches.displayBranchs());
console.log(newBranches.removeBranch("norte"));
console.log(newBranches.displayBranchs());