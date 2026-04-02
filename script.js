const userLocale = navigator.language;

let currency = "USD";
let rate = 1;
let symbol = "$";

if (userLocale.includes("en-GB")) {
currency = "GBP";
rate = 0.79;
symbol = "£";
}

if (userLocale.includes("en-US")) {
currency = "USD";
rate = 1;
symbol = "$";
}

const price1 = 99 * rate;
const price2 = 199 * rate;

document.getElementById("price1").innerText = symbol + price1.toFixed(0);
document.getElementById("price2").innerText = symbol + price2.toFixed(0);
