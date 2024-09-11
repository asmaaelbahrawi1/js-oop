
class Rectangle {
    
    static objectCount = 0; //هيعد كام مستطيل اتعمل

    constructor(width, height) {
        this.width = width;
        this.height = height;
        Rectangle.objectCount++;  // كل مايتعمل اوبجكت هيزود واحد
    }

    // Method for area
    calculateArea() {
        return this.width * this.height;
    }

        // Method for perimeter
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }

    // Method to display the width height area perimeter
    display() {
        console.log("width = " + this.width + " , height = " + this.height + " , area = " + this.calculateArea() + " , permeter = " + this.calculatePerimeter());
        
    }

    // Override  toString() function 
    toString() {
        return "you created a rectangle with : width = " + this.width + " , height = " + this.height + " , area = " + this.calculateArea() + " , permeter = " + this.calculatePerimeter();
         
    }

    // retrieve number of created objects
    static getObjectCount() {
        return Rectangle.objectCount;
    }
}
// ----------------------------------------------

//مفروض يطلع خمس مستطيلات 
var rectangle1 = new Rectangle(10 , 12);
rectangle1.display(); 
console.log(rectangle1.toString());


var rectangle2 = new Rectangle(3 , 5);
rectangle2.display(); 
console.log(rectangle2.toString());


var rectangle3 = new Rectangle(4 , 4);
rectangle3.display(); 
console.log(rectangle3.toString());


var rectangle4 = new Rectangle(6 , 12);
rectangle4.display(); 
console.log(rectangle4.toString());


var rectangle5 = new Rectangle(30 , 10);
rectangle5.display(); 
console.log(rectangle5.toString());



console.log("total number of rectangles : " + Rectangle.getObjectCount());
