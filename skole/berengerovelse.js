var subtotal = 100;
var DKtaxRate = 0.25;
UStaxRate = 0.20;
RUtaxRate = 0.95;

var element = document.getElementById('taxOutput');
var salesTax = calculateTax(DKtaxRate, subtotal, "DKK");
    salesTax = calculateTax(UStaxRate, subtotal, "USD");
    salesTax = calculateTax(RUtaxRate, subtotal, "RUB");

function calculateTax(tal1, tal2, currency){
    var tax = tal1 * tal2;
    tax = tax.toFixed(2);
    element.innerHTML +="Rusland moms: " + tax + currancy "<br>";
}