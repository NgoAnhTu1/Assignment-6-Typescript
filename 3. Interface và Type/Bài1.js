var myCar = {
    brand: "BMW",
    speed: 100,
    start: function () {
        console.log("Let's start");
    }
};
console.log("My car is ".concat(myCar.brand, " and speed is  ").concat(myCar.speed));
myCar.start();
