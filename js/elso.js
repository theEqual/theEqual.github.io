let ertekeles;
let fajlokSzama;
let szam = 0;
const Pi = 3.1416;

let bevittErtek = 0;

function hozzaad() {
    let bevittErtek = document.querySelector("input#csakUgy");
    let hozzaadott = parseInt(bevittErtek.value);
    szam += hozzaadott;
}

function szamlalo() {
    szam += 1;
}

function kiiro() {
    alert("Eddigi kattintások száma: " + szam + "db");
}

function masodikKiiro() {
    let ertek = document.querySelector("span[name='kiiras']");
    ertek.innerHTML = szam;

}


function pluszTema() {
    console.log("siker");
    let cim = document.querySelector("#cim");
    let leiras = document.querySelector("#szoveg");
    let hely = document.querySelector("#new");

    let newRubrik = document.createElement("div");
    newRubrik.className= "col-2";

    let newCard = document.createElement("div");
    newCard.style.backgroundColor= "#00aaff";
    newCard.style.height= "350px";
    newCard.className= "card";
    
    let newBody = document.createElement("div");
    newBody.className= "card-body";

    let temaCim = document.createElement("h5");
    temaCim.className= "card-title";
    temaCim.innerHTML= cim.value;

    let temaLeiras = document.createElement("p");
    temaLeiras.className= "card-text";
    temaLeiras.innerHTML= leiras.value;

    newBody.appendChild(temaCim);
    newBody.appendChild(temaLeiras);
    newCard.appendChild(newBody);
    newRubrik.appendChild(newCard);
    hely.appendChild(newRubrik); 
    
}