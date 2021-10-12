let result=0
let d="+-*/"

function math(a,b,c){
 
if (!(a.isNaN && b.isNaN)){
    switch(c.charCodeAt(0)){
        case 43:
            console.log(a+b);
            break;
        case 45:
            console.log(a-b);
            break;
        case 42:
            console.log(a*b);
            break;
        case 47:
            console.log(a/b);
            break;
    }
}
else{
    console.log("So nhap ko dung")
}
}

math(8,9,"-")