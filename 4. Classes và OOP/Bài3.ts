abstract class Shape {
    abstract area(): number;

    printName(): void {
        console.log("This is a shape.");
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle(5);
console.log(`Circle area: ${myCircle.area()}`);
myCircle.printName();

const myRectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${myRectangle.area()}`);