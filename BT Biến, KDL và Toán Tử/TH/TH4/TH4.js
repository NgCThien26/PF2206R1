// Khai báo các biến để nhận giá trị chiều cao và chiều rộng từ người dùng
let inputWidth;
let inputHeight;
// Sử dụng hàm prompt để lấy dữ liệu nhập vào từ người dùng
inputWidth = prompt("Enter the width");
inputHeight = prompt("Enter the height");
// Sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên.
let width = parseInt(inputWidth);
let height = parseInt(inputHeight);
// Tính diện tích của hình chữ nhật và hiển thị ra màn hình
let area = width * height;
document.write("The area is: " + area);