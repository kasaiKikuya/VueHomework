let textString = ["haha", "hehe","huhu","lala","lele","dada","dadada"]


let text = "   ";
for (let i = 0; i < textString.length ;i++) {
  
let para = document.createElement("p");
let  node = document.createTextNode(textString[i]);

para.appendChild(node);
const element = document.getElementById("bai2");
element.appendChild(para);}
 
// textString.forEach(function(value, key) {
     
//     text += textString[key].value + "<br>"

//   })

// for (let i = 0; i < textString.length ;i++) {
//   text += textString[i].value + "<br>";
// }
// document.getElementById("bai2").innerHTML = text;