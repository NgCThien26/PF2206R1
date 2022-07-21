
function getDay() {
    //b1: Lay du lieu
let day = document.getElementById("day").value;
let month = document.getElementById("month").value;
let year = document.getElementById("year").value;
    //b2: thuc hien tinh toan
    let result = day + "-" + month + "-" + year;
    //b3: hien thi ket qua
    document.getElementById("result").innerText = result;
}