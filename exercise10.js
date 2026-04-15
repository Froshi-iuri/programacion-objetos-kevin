/*10. Product and PersonalCareProduct Classes with Warranty

Write a JavaScript program that creates a class called Product with 
properties for product ID, name, and price. Include a method to calculate 
the total price by multiplying the price by the quantity. Create a subclass 
called PersonalCareProduct that inherits from the Product class and adds 
an additional property for the warranty period. Override the total price 
calculation method to include the warranty period. Create an instance of 
the PersonalCareProduct class and calculate its total price.*/
class Product{
    productID;
    productName;
    productPrice;
    constructor(productID, productName, productPrice){
        this.productID = productID;
        this.productName = productName;
        this.productPrice = productPrice;
    }
    totalPrice(amount){
        return `product name: ${this.productName}. quantity: ${amount}. price ${this.productPrice}. total: ${amount * this.productPrice}`
    }
}

class PersonalCareProduct extends Product{
    warrantyPeriod;
    constructor(productID, productName, productPrice, warrantyPeriod){
        super(productID, productName, productPrice);
        this.warrantyPeriod = warrantyPeriod;
    }
    totalPrice(amount){
        return `product name: ${this.productName}. quantity: ${amount}. price ${this.productPrice}. total: ${amount * this.productPrice}. 
        the warranty period is: ${this.warrantyPeriod} years`
    }
}

const product1 = new PersonalCareProduct(1, "shampoo", 9000, 1);
console.log(product1.totalPrice(10));
