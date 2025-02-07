
//Så mit navn står i consolen

//Denne H1 overtager hele min body (men er nu sat som kommentar)
//document.body.innerHTML = "<h1>Andreasermitnavn</h1>";

document.getElementById("hvaderdether").innerHTML = z;
document.getElementById("hvaderdether").style.color = "blue";

var x = 2
var y = "4"
var z = x + y

var navne = ["peter", "lars", "jøgern"];
document.getElementById("hvaderdether").innerHTML = navne[1];

if (navne[1] == "Vincent Wiederhold") { vincent = "Vincent Victor Taliesin Wiederhold"; 
}
else {vincent = "Mit navn"}

console.log(vincent);
