function getValue(value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
}
var value1 = 2;
var value2 = "typescipt";
console.log(getValue(value1));
console.log(getValue(value2));
