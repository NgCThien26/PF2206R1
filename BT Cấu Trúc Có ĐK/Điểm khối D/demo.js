function tinhdiem(){
    let toan = +document.getElementById('toan').value;
    let van = +document.getElementById('van').value;
    let anh = +document.getElementById('anh').value;
    let kv = +document.getElementById('kv').value;
    let kv1 = +document.getElementById('kv1').value;
    let kv2 = +document.getElementById('kv2').value;
    let kv2nt = +document.getElementById('kv2nt').value;
    let kv3 = +document.getElementById('kv3').value;

    let result = "";
    switch(kv){
        case kv1:
            result = toan + van + anh + kv1;
            break;
        case kv2:
            result = toan + van + anh + kv2;
            break;
        case kv2nt:
            result = toan + van + anh + kv2nt;
            break;
        case kv3:
            result = toan + van + anh + kv3;
            break;
    }
    document.getElementById("result").innerHTML = "Tổng điểm ĐH khối D của bạn là " + result;
}