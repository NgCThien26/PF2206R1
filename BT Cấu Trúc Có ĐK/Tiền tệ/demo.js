function convert() {
    // lấy số tiền
    let amount = +document.getElementById("amount").value;
    // tính tỷ lệ
    let form = +document.getElementById("form").value;
    let to = +document.getElementById("to").value;
    let rate = form/to;
    // tính kết quả
    let result = amount*rate;
    // in kết quả
    document.getElementById("result").innerText = result;   
}