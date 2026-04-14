/*5. Shape, Circle, and Triangle Classes with Area Calculation

Write a JavaScript program that creates a class called 'Shape' 
with a method to calculate the area. Create two subclasses, 
'Circle' and 'Triangle', that inherit from the 'Shape' class and 
override the area calculation method. Create an instance of the 'Circle' 
class and calculate its area. Similarly, do the same for the 'Triangle' class.*/

class Shape{
    calculateArea(){
        return 0
    }
}
class Circle extends Shape{
    ratio;
    constructor(ratio){
        super()
        this.ratio = ratio
    }
    calculateArea(){
        return `The area calculate for the circle is: ${Math.PI * (this.ratio * this.ratio)}`
    }
}
class Triangle extends Shape{
    base;
    height;
    constructor(base, height){
        super()
        this.base = base;
        this.height = height;
}
calculateArea(){
        return `The area calculate for the triangle is: ${(this.base * this.height) /2}`
    }
}

let circle1 = new Circle(29);
console.log(circle1.calculateArea());
let triangle1 = new Triangle(10, 10);
console.log(triangle1.calculateArea());
