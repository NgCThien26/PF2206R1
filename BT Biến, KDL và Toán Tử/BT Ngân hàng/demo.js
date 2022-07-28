let sotiengui=prompt("Nhập Số Tiền Gửi Tiết Kiệm:");
        let laisuat=prompt("Lãi Suất:");
        let sonam=prompt("Số Năm:");
        sotiengui=parseFloat(sotiengui);
        laisuat= parseFloat(laisuat);
        sonam= parseFloat(sonam);
        let sotienbannhan=(sotiengui*laisuat*sonam/100)+sotiengui;
        document.write("Số Tiền Bạn Nhận Được Là:  "+sotienbannhan);