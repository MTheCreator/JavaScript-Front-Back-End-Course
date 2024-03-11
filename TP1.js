// Exercise 1
var chaine = prompt("Enter a chain of caracters: ");
document.body.innerText = chaine;

// Exercise 2
var a = 5;
var b = 6; 
var sum = a + b;
confirm("The sum is" + sum);

// Exercise 3 
var budjet = 3000;
var achats = 1200;
var a = Boolean(budjet >= achats);
if(a == 1){
    confirm("The budget pays for the products");
} else {
    confirm("The budget doesn't pay for the products");
}


//Exercise 4
var prixHT = parseFloat(prompt("Entrez le prix HT:"));
if (prixHT <= 0 || isNaN(prixHT)) {
    alert("Veuillez entrer un prix HT valide supérieur à zéro.");
} else {
    var prixTTC = prixHT * 1.20; // TVA en pourcentage
    document.body.innerText = "Le prix TTC est : " + prixTTC.toFixed(2);
}

//Exercise 5
var prixHT = parseFloat(prompt("Entrez le prix HT:"));
if (prixHT <= 0 || isNaN(prixHT)) {
    alert("Veuillez entrer un prix HT valide supérieur à zéro.");
} else {
    var tauxTVA = parseFloat(prompt("Entrez le taux de TVA en pourcentage:"));
    if (tauxTVA < 0 || isNaN(tauxTVA)) {
        alert("Veuillez entrer un taux de TVA valide supérieur ou égal à zéro.");
    } else {
        var prixTTC = prixHT * (1 + tauxTVA / 100); // TVA en pourcentage
        document.body.innerText = "Le prix TTC est : " + prixTTC.toFixed(2);
    }
}

//Exercise 6
var HT = prompt("Enter a HT price: ");
var TVA = prompt("Enter a TVA price: (float value)");

var flo_HT = parseFloat(HT);
var float_TVA = parseFloat(TVA);

var TTC = flo_HT + flo_HT * float_TVA;

var color = TTC > 100 ? 'red': 'green';

document.body.innerHTML = "<div style='color:" + color + ";'>" + TTC.toFixed(2) + "</div>";


//Exercise 7 
document.getElementById('cocktail').innerText = "Long Island Iced Tea";


//Exercise 8
var table = "<table border='1'>";
    for (var i = 0; i < 3; i++) {
        table += "<tr>";
        for (var j = 0; j < 2; j++) {
            table += "<td>Content</td>";
        }
        table += "</tr>";
    }
    table += "</table>";
    document.body.innerHTML = table;


//Exercise 9
var lignes = parseInt(prompt("Entrez le nombre de lignes:"));
var colonnes = parseInt(prompt("Entrez le nombre de colonnes:"));
var table = "<table border='1'>";
for (var i = 0; i < lignes; i++) {
    table += "<tr>";
    for (var j = 0; j < colonnes; j++) {
        table += "<td>Content</td>";
    }
    table += "</tr>";
}
table += "</table>";
document.body.innerHTML = table;

//Exercice 10
var liste = "<ul>";
    for (var i = 0; i < 10; i++) {
        var nombreAleatoire = Math.floor(Math.random() * 100);
        liste += "<li>" + nombreAleatoire + "</li>";
    }
    liste += "</ul>";
    document.body.innerHTML = liste;

// Exercice 11
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

document.body.style.background = 'rgb(' + r + ',' + g + ',' + b +')';

//Exercice 12
var images = "";
    for (var i = 0; i < 12; i++) {
        var randomID = Math.floor(Math.random() * 1000); // Génère un ID aléatoire entre 0 et 1000
        images += "<img src='https://picsum.photos/id/" + randomID + "/350/350'>";
    }
document.body.innerHTML = images;