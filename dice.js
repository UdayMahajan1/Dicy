var randomNumber = Math.floor(Math.random()*6)+1 ;
var randomNumber1 = Math.floor(Math.random()*6)+1 ;
var randomstring = "images/dice"+randomNumber+".png" ;
var randomstring1 = "images/dice"+randomNumber1+".png" ;
document.querySelectorAll("img")[0].setAttribute("src", randomstring) ;
document.querySelectorAll("img")[1].setAttribute("src", randomstring1) ;
if (randomNumber > randomNumber1) {
    document.querySelector("h1").textContent = "Player 1 wins" ;
}
if (randomNumber1 > randomNumber) {
    document.querySelector("h1").textContent = "Player 2 wins" ;
}
if (randomNumber === randomNumber1) {
    document.querySelector("h1").textContent = "Its a tie." ;
}