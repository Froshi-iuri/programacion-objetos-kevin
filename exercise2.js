/* 2. Rectangle Class with Area and Perimeter

Write a JavaScript program to create a class called 'Rectangle' with properties for
width and height. Include two methods to calculate rectangle area and perimeter.
Create an instance of the 'Rectangle' class and calculate its area and perimeter.*/
class Rectangle{
    width;
    height;
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculatorArea(){
        return `Area: ${(this.width * this.height)}cm^2`
    }
    calculatorPerimeter(){
        return `Perimetro: ${(2*(this.width + this.height))}`
    }
}
let newRectangle = new Rectangle(7, 3);
console.log(newRectangle.calculatorArea());
console.log(newRectangle.calculatorPerimeter());
