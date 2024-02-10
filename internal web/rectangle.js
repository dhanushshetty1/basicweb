class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth=breadth;
    }
    calculateArea(){
        return this.length * this.breadth;
    }
}
let myRect = new Rectangle(5,10);
console.log("length:",myRect.length);
console.log("breadth:",myRect.breadth);
console.log("Area:",myRect.calculateArea());

