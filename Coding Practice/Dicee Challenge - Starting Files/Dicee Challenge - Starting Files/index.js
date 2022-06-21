let randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
let randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
console.log( randomNumber1 );
let randomDiceImage = "images/dice" + randomNumber1 + ".png"; 
let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage);
image2.setAttribute("src", randomDiceImage2);
if ( randomNumber1 > randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Kelvin Wins!";
}
else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Tiff Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}