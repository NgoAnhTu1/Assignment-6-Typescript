function addNumber(a: number, b: number = 10): number{
    return a+b;
}

let a = addNumber(10, 20) // Trường hợp này truyền 2 tham số
console.log(a)
a = addNumber(30) // Trường hơp này chỉ truyền 1 tham số, y mặc định là 10
console.log(a)
