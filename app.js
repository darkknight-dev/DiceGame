// var dom1 = document.querySelectorAll("img")[0];
// var dom2 = document.querySelectorAll("img")[1];
let ran1;
let dice1;
let ran2;
let dice2;
ran1 = Math.floor(Math.random() * 6) + 1  ;
dice1 = 'images/' + 'dice' + ran1 + ".png";
console.log(dice1);
ran2 = Math.floor(Math.random() * 6) + 1  ;
dice2 = "images/" + "dice" + ran2 + ".png";
console.log(dice2);

// var dom1 = document.querySelectorAll("img")[0];
// var dom2 = document.querySelectorAll("img")[1];
document.querySelectorAll("img")[0].setAttribute("src",dice1);
document.querySelectorAll("img")[1].setAttribute("src",dice2);

if(ran1 > ran2){
  document.querySelector("h1").textContent="Player1 Wins";
}
else if (ran2 > ran1) {
  document.querySelector("h1").textContent="Player2 Wins";
}

else{
  document.querySelector("h1").textContent="Match draw";
}
