function songay(){
    let thang = +document.getElementById('thang').value;
    let result = "";
    switch(thang){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            result = "Có 31 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            result = " Có 30 ngày";
            break;
        case 2:
            result = "Có 28 hoặc 29 ngày";
            break;
    }
    document.getElementById('result').innerHTML = result;
}