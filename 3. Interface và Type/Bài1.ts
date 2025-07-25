interface Car {
    readonly brand: string;
    speed: number;
    start(): void;
}

const myCar: Car ={
    brand: "BMW",
    speed: 100,
    start : function(){
        console.log("Let's start");
    }
}
console.log(`My car is ${myCar.brand} and speed is  ${myCar.speed}`);
myCar.start();