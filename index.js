var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var img_one = document.querySelector('.img1');
var img_two = document.querySelector('.img2');

if (randomNumber1===1){
  img_one.setAttribute("src", "images/dice1.png");
} else if (randomNumber1===2) {
  img_one.setAttribute("src", "images/dice2.png");
} else if (randomNumber1===3) {
  img_one.setAttribute("src", "images/dice3.png");
} else if (randomNumber1===4) {
  img_one.setAttribute("src", "images/dice4.png");
} else if (randomNumber1===5) {
  img_one.setAttribute("src", "images/dice5.png");
} else if (randomNumber1===6) {
  img_one.setAttribute("src", "images/dice6.png");
}


if (randomNumber2===1){
  img_two.setAttribute("src", "images/dice1.png");
} else if (randomNumber2===2) {
  img_two.setAttribute("src", "images/dice2.png");
} else if (randomNumber2===3) {
  img_two.setAttribute("src", "images/dice3.png");
} else if (randomNumber2===4) {
  img_two.setAttribute("src", "images/dice4.png");
} else if (randomNumber2===5) {
  img_two.setAttribute("src", "images/dice5.png");
} else if (randomNumber2===6) {
  img_two.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
}
