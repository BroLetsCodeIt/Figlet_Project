// import figlet from 'figlet';
var textenter = document.querySelector('#textenter');
var generate = document.querySelector('.generatebtn');
var textarea = document.querySelector('.textarea');
// import "./fig.js";
import standard from "figlet/importable-fonts/Standard.js";
import figlet from "figlet";
figlet.parseFont("Standard", standard);
// var run = figlet(textenter , (err , data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
//     return data;
    
// })

generate.addEventListener('click', () =>{
    // if(e.target.value === '' || e.target.value  === null){
    //     console.log(inputText)
    //     console.log('error');
    //     return;
    // }
    var inputText = document.querySelector("#textenter").value;
    if(inputText === '' || inputText === null){
       
       console.log("something went wrong")
       return;
    }
   
  //  console.log(e.target.value);
   console.log(inputText);
    

figlet.text(inputText, {
   font: "Standard",
   horizontalLayout:'fitted'
}, function (err, text) {
    if (err) {
      console.log("something went wrong...");
      console.dir(err);
      return;
    }
    console.log(text);
    textarea.innerHTML = text;
  })

})