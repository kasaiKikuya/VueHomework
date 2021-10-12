
let a=3

function days(a){
    if (a==2){
        console.log("Thang co 28 hoac 29 ngay");
    }
    else{
        if(a<=7){
            if(a%2!=0){
                console.log("Thang co 31 ngay");
            }else{
                console.log("Thang co 30 ngay");
            }
        }
        else{
            if(a%2!=0){
                console.log("Thang co 30 ngay");
            }else{
                console.log("Thang co 31 ngay");
            }
        }
    }
}

days(a)
function intCheck(b){
    if (Math.trunc(b)-b==0){
         if(b>0){console.log("So nguyen duong")}
         else{
            if(b<0){console.log("So nguyen am")}
            else{
                console.log("So 0")}
        }
    }else{
        console.log("Khong phai so can kiem tra")
    }
}
intCheck(0)