function add(){
   let a = prompt('Nhập vào giới hạn số bạn muốn đoán: ');
   let num = Math.round(Math.random() * a);
   let guessnum;
   
   do {
    guessnum = Number(prompt('Nhập số bạn muốn đoán: '));
        if(guessnum == num){
            alert('Bạn đã đoán đúng!');
        } else if(guessnum < num) {
            alert('Số dự đoán nhỏ hơn số bí mật!')
        }else{
            alert('Số dự đoán lớn hơn số bí mật!')
        }

   }while(num != guessnum)

}