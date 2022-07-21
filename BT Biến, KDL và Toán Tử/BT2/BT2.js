//b1: lay ban kinh
let r = prompt("Moi ban nhap ban kinh");
r = Number(r);
const PI = 3.14;
//b2: tinh chu vi va dien tich
let p = 2*PI*r;
let s=PI*r*r;
//b3: Hien thi ket qua
document.write("chu vi la " + p.toLocaleString('en-IN'));
document.write("<br>");
document.write("dien tich la " + s.toLocaleString('en-IN'));