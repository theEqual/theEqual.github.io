let ertekeles;
let fajlokSzama;
let szam = 0;
const Pi = 3.1416;

let bevittErtek = 0;

function hozzaad(){
    let bevittErtek = document.querySelector("input[name='csakUgy']")
    let hozzaadott = parseInt(bevittErtek.value)
    szam += hozzaadott
}

function szamlalo() {
    szam += 1;
}

function kiiro() {
    alert("Eddigi kattintások száma: " + szam + "db");
}