// Dùng unknown thay cho any trong trường hợp phải kiểm tra kiểu dữ liệu của biến đó. 
// Unknown và any đều cho phép truyền dữ liệu mà không cần kiểm tra kiểu nhưng với 
// unknown thì chỉ có thể gọi đến phương thức và thuộc tính khi thu hẹp kiểu dữ liệu 
// của nó (ví dụ như string, number) còn any không kiểm tra, do đó unknown an toàn hơn.
// Ví dụ
var v = true;
v = "string"; // sẽ không có lỗi vì đã khai báo v là any
//Math.round(v) // nhưng ở đây sẽ có lỗi vì v lúc này là kiểu string và string không có phương thức round
console.log(v.length); // sẽ hoạt động vì v là kiểu string
var unVal = 9;
unVal = {
    Dif: function () {
        console.log("Hello");
    }
};
//unVal = 9; // Nếu bỏ comment ở đây thì x = 9 sẽ là kiểu number và đoạn code dưới sẽ không được thực hiện
if (typeof unVal === "object" && unVal !== null) { // Ở đây sẽ kiểm tra xem unVal có phải object và khác null không
    unVal.Dif(); // 
}
