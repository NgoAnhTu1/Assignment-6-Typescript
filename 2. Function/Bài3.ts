function getValue(value: string | number){
    if (typeof value === 'number'){
        return value*2;
    }
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
}

let value1 = 2;
let value2 = "typescipt";
console.log(getValue(value1));
console.log(getValue(value2));