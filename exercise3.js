/*3. Vehicle and Car Classes with Inheritance

Write a JavaScript program that creates a class called 'Vehicle' with properties for make, 
model, and year. Include a method to display vehicle details. Create a subclass called 'Car' 
that inherits from the 'Vehicle' class and includes an additional property for the number of doors. 
Override the display method to include the number of doors.*/
class Vehicle {
    make;
    model;
    year;
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    car(make, model, year, doors){
        super(make,model,year);
        this.doors = doors
    }
    car(){
        return `Make: ${this.make}, Model: ${this.model}, Year${this.year}, doors: ${this.doors}`
    }
}

