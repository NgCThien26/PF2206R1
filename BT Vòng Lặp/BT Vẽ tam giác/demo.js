// hình a

for (let i = 0; i < 8; i++){
    for (let j = 0; j<=i; j++){
        document.write('*');
    }
    document.write("<br>");
}


// hình b
document.write('<br>')
for (let i = 0; i < 8; i++){
    for (let j = 0; j<(8-i); j++){
        document.write('*');
    }
    document.write("<br>");
}


// hình c

document.write('<br>')
for ( let i = 1; i < 9; i++){
    for (let j= 8-i; j>0; j--){
        document.write("&nbsp&nbsp")
    }
        for(let j=8-i;j<8;j++){
            document.write('*')
    }document.write('<br>')
}


// hình d
document.write('<br>')
for ( let i = 0; i < 8; i++){
    for (let j= i; j>0; j--){
        document.write("&nbsp&nbsp")
    }
        for(let j=8-i;j>0;j--){
            document.write('*')
    }document.write('<br>')
}



    











