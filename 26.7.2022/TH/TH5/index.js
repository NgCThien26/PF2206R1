// b1: Nhập dữ liệu từ bàn phím
let year = parseInt(prompt("Nhập năm"));
let isLeapYear = false;
// b2: Phân loại và hiển thị kết quả
if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        isLeapYear = true;
      }
    } else {
      isLeapYear = true;
    }
  }
  
  if (isLeapYear) {
    alert(year + " là năm nhuận");
  } else {
    alert(year + " là năm không nhuận");
  }