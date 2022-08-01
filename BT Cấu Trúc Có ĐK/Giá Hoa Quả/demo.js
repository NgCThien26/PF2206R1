function xemgia(){
    let tenhoaqua = document.getElementById("tenhoaqua").value;
    let result ="";
         switch(tenhoaqua) {
            case "Ổi":
                result = "20000VND/kg";
                break;
            case "Dưa Hấu":
                result = "20000VND/kg";
                break;
            case "Táo":
                result = "30000VND/kg";
                break;
            case "Xoài":
                result = "30000VND/kg";
                break;
            case "Cam":
                result = "40000VND/kg";
                break;
            case "Chôm Chôm":
                result = "40000VND/kg";
                break;
            case "Măng Cụt":
                result = "50000VND/kg";
                break;
         }
         document.getElementById("result").innerHTML= result;
    }