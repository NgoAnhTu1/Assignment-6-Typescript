// 1. Data Types, Type Annotation, Type Assertion
// Bài 1
// Lỗi là biến age được khai báo là kiểu number 
// nhưng trong đoạn code trên thì đang được khởi tạo là "25" - kiểu string 
// và biến isActive được khai báo là boolean nhưng được khởi tạo là "true" - kiểu string
// Đoạn code sau khỉ sửa lại đúng là:
let age: number = 25;
let isActive: boolean = true;
let data: any = {x: 10};
data = "hello"