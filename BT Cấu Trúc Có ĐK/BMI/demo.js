let heighta = document.getElementById('height');
let weightb = document.getElementById('weight');
let cal = document.getElementById('kq');

function calculate(height, weight) {
    if(height <= 0 || weight <= 0) {
        alert('Không có kết quả');
    }
    height = height/100;
    let bmi = weight/Math.pow(height,2);
    return bmi;
}

cal.onclick = function result() {
    var height = heighta.value;
    var weight = weightb.value;
    var bmi = calculate(height, weight);
    if(bmi < 16){
        alert('Gầy cấp độ III');
    } else if(bmi >= 16.5 && bmi < 17){
        alert('Gầy cấp độ II');
    } else if(bmi >= 17 && bmi < 18.5){
        alert('Gầy cấp độ I');
    } else if(bmi >= 18.5 && bmi < 25){
        alert('Bình thường');
    } else if(bmi >= 25 && bmi < 30){
        alert('Thừa cân');
    } else if(bmi >= 30 && bmi < 35){
        alert('Béo phì cấp I');
    } else if (bmi >= 35 && bmi < 40){
        alert('Béo phì cấp II')
    } else if (bmi > 40)
        alert('Béo phì cấp III');

}