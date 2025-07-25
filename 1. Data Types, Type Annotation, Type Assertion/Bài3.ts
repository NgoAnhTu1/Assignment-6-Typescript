const input = document.getElementById("input") as HTMLInputElement;
//const value = input.value; 
// Giá trị của value ở đây được lấy về sẽ luôn là string
// do đó cần biến lại về kiểu number như sau:
const value: number = Number(input.value);