/*6. Employee and Manager Classes with Salary Calculation

Write a JavaScript program that creates a class called 'Employee' with 
properties for name and salary. Include a method to calculate annual salary. 
Create a subclass called 'Manager' that inherits from the 'Employee' class 
and adds an additional property for department. Override the annual salary 
calculation method to include bonuses for managers. Create two instances of 
the 'Manager' class and calculate their annual salary.*/
class Employee {
    name;
    salary;
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary(){
        return `salary: ${this.salary}. salary annual: ${this.salary * 12}`
    }
}

class Manager extends Employee{
    department;
    bonusesManagers;
    constructor(name, salary, department, bonusesManagers){
        super(name, salary);
        this.department = department
        this.bonusesManagers = bonusesManagers
    }
    calculateAnnualSalary(){
        return `monthly salary: ${this.salary}. salary annual: ${this.salary * 12}. bonuses of manager: ${this.bonusesManagers}%. 
        total: ${(this.salary * 12) + (this.salary * 12 * (this.bonusesManagers / 100))}`
    }
}

let salary1 = new Manager("froshi", 1746882, "cauca", 7);
console.log(salary1.calculateAnnualSalary());
let salary2 = new Manager("iuri", 1746882, "cauca", 5);
console.log(salary2.calculateAnnualSalary());
