
document.getElementById("testet").innerHTML = b
document.getElementById("testet").style.color = "blue";

var b = ["vinter","forår","sommer"];
b.push("efterår") // tilføjer et element
b[3]="midtsommer"
var output=document.getElementById("out");

var testetHtml="<br><br>select id='z>";
//loop igennem array og skriv elementet ud
for (a=0; a < z.length;a++) {
    testetHtml += "<option>" + z[a] + "</option";
}
output.innerHTML+=testetHtml;