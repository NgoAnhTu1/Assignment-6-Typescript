function addNumber(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
var a = addNumber(10, 20);
console.log(a);
a = addNumber(30);
console.log(a);
