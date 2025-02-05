//let element = document.getElementById("minKnap");
//document.getElementById("klik", minFunktion);

////document.getElementById("nyt").innerHTML = "fedt det virker";
//}
let element = document.getElementById("minKnap"); 
element.addEventListener("click", minFunktion);

function minFunktion() {
    document.getElementById("nyt").innerHTML = "fedt det virker";
}
