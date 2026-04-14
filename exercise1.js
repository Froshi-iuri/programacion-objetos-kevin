/* 1. Person Class with Details

Write a JavaScript program to create a class called "Person" with properties 
for name, age and country. Include a method to display the person's details. 
Create two instances of the 'Person' class and display their details.
*/
class Person{
    name;
    age;
    country;
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    information(){
        return `name: ${this.name}, age: ${this.age}, country: ${this.country}`
    }
}

let froshi = new Person("Froshi iuri", 19, "Colombia");
let clerix = new Person("clerix riul", 22, "Colombia");
console.log(froshi.information());
console.log(clerix.information());