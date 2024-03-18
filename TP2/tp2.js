//Exercise 1

function add() {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);

    var sum = num1 + num2;

    document.getElementById("result").innerHTML = "="+ sum;
}

//Exercise 2

function permutation(){
    var elem1 = document.getElementById("elem1").value;
    var elem2 = document.getElementById("elem2").value;

    var temp = elem1;
    elem1 = elem2;
    elem2 = temp;

    document.getElementById("elem1").value = elem1;
    document.getElementById("elem2").value = elem2; 
}

//Exercise 3

function calculate() {
    var one = parseFloat(document.getElementById("one").value);
    var two = parseFloat(document.getElementById("two").value);

    var op = document.getElementById("op").value;

    var Result;

    switch(op){

        case "add": Result = one + two; break;
        case "subtract": Result = one - two; break;
        case "multiply": Result = one * two; break;
        case "divide": 
            if(two != 0){Result = one / two;}
            else {Result = "invalid operation"}
        break;

        default: Result = "invalid operation";

    }


    document.getElementById("Result").innerHTML = "= " + Result;
}

//Exercise 4

var a = parseFloat(prompt("Enter the first numeric value: "));
var b = parseFloat(prompt("Enter the second numeric value: "));
var c = parseFloat(prompt("Enter the third numeric value: "));

if(a == b == c){
    confirm("The variables are identical");
} else if(a == b && a != c || a == c && a != b || b == c && b != a){
    confirm("two variables are identical");
} else {
    confirm("no variables are identical");   
}

//Exercise 5

var HT = parseFloat(prompt("Enter the HT price: "));
var TVA = parseFloat(prompt("Enter the TVA:(percentage format) "));
var TTC;

TTC = HT + HT * TVA / 100;

document.body.innerText = "The price after TVA is: " + TTC;

//Exercise 6

function showInfos(){
    var sender = document.getElementById("email").value;
    var object = document.getElementById("object").value;
    var body = document.getElementById("body").value;

    document.body.innerText = "Sender: " + sender + '\n' + "Objet: " + object + '\n' + "Corps de l'email: " + body;
}

//Exercise 7
document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirection Interdite");
});

var menu = document.getElementById("menu");

menu.addEventListener("click", function(){
    if (actualMenu.style.display === "none") {
        actualMenu.style.display = "block";
    } else {
        actualMenu.style.display = "none";
    }});

menu.addEventListener("mouseleave", function(){
    actualMenu.style.display = "none";
});
