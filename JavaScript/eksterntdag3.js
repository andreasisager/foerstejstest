document.getElementById("knap").addEventListener("click", addOne);

function addOne() {
    let x = parseInt(document.getElementById("input").value);
    let result = x + 1;
    document.getElementById("input").value = result;
}


