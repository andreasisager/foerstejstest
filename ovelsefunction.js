
document.getElementById("testet").innerHTML = b
document.getElementById("testet").style.color = "blue";

var b = ["vinter","forår","sommer"];
b.push("efterår") // tilføjer et element
b[3]="midtsommer"
var output=document.getElementById("out");
if(z[3]=="Test"){
    output.innerHTML="ja, den tredje årstid er midtsommeren"
}else{
    output.innerHTML=" nej, den tredje årstid er ikke midtsommer"
}
output.innerHTML+="<h1>Array'et indehlder:</h1>"
z.sort();



var testetHtml="<br><br>select id='z>";

//loop igennem array og skriv elementet ud
for (a=0; a < z.length;a++) {
    testetHtml += "<option>" + z[a] + "</option";
}
output.innerHTML+=testetHtml;




//ektra -tag et tilfældig element mellem 0 og 3,
//og skriv det tilfældige ellement ud i browseren
var rndtal=Math.floor(Math.random() * 4);
//output.innerHTML+= "<br>"+ z[rndtal];
//I z.reverse()
console.log(z)



//Optionbox til testet html
var testetHtml="<br><br><select id='cars'>";
//loop igennem array og skriv elementet ud
for (a=0; a < z.length;a++) {
    testetHtml += "<option>" + z[a] + "</option";
}
output.innerHTML+=testetHtml;