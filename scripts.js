// get player names
var player1Name = prompt("Enter your name player 1");
var player2Name = prompt("Enter your name player 2");

// message player 1 to go
document.querySelector("#message").textContent = player1Name + " goes (X)";

// current turn
var currentTurn = "X";

var allBoxes = document.querySelectorAll(".box");
for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", function (e) {
    console.log(e);
    // show X or Y
    e.target.textContent = currentTurn;
    // toggle between X and Y
    if (currentTurn === "X") {
      currentTurn = "O";
    } else {
      currentTurn = "X";
    }
    // determine if winnner
  });
}
