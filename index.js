function rollDicee(){
  //generate a random number between 1 and 6 for each of the dice
  var randomNumber1 = diceNumber();
  var randomNumber2 = diceNumber();

  //update the dice image for each player 
  document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);

  //update the game status heading 
  document.querySelector("h1").textContent = outcomeStatus(randomNumber1, randomNumber2);
  
}

function diceNumber(){
  return Math.floor(Math.random() * 6) + 1;
}

function outcomeStatus(num1, num2){
  var outcomeText = "Draw";

  if(num1 > num2){outcomeText = "Player 1 Wins!";}
  if(num1 < num2){outcomeText = "Player 2 Wins!";}
  
  return outcomeText;
}