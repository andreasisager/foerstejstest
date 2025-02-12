
//Så mit navn står i consolen

//Denne H1 overtager hele min body (men er nu sat som kommentar)
//document.body.innerHTML = "<h1>Andreasermitnavn</h1>";

document.getElementById("demo").innerHTML = z
document.getElementById("demo").style.color = "red";

var x = 2
var y = "4"
var z = x + y

var frugt = ["kiwi", "banan", "vandmelon"];


if (frugt[2] == "vandmelon") { hvilkenfrugt = "dagensfrugt"; 
}

else {hvilkenfrugt = "maanedensfrugt"}

console.log(hvilkenfrugt);


for (let i = 0; i < frugt.length; i++) {
    console.log(frugt[i]); }

function myFunction(p1) {
     return p1 - (p1 * .25);
}
      
let result = myFunction(100);
document.getElementById("demo").innerHTML = result;

