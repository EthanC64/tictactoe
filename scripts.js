// get player names
var player1Name = prompt("Enter your name player 1");
var player2Name = prompt("Enter your name player 2");

// message player 1 to go
document.querySelector("#message").textContent = player1Name + " goes (X)";

// current turn
var currentTurn = "X";

var determineWinner = function () {
  var box1 = document.querySelector("#box1").textContent;
  var box2 = document.querySelector("#box2").textContent;
  var box3 = document.querySelector("#box3").textContent;
  var box4 = document.querySelector("#box4").textContent;
  var box5 = document.querySelector("#box5").textContent;
  var box6 = document.querySelector("#box6").textContent;
  var box7 = document.querySelector("#box7").textContent;
  var box8 = document.querySelector("#box8").textContent;
  var box9 = document.querySelector("#box9").textContent;

  var winCase1 =
    box1 === currentTurn && box2 === currentTurn && box3 === currentTurn;
  var winCase2 =
    box4 === currentTurn && box5 === currentTurn && box6 === currentTurn;
  var winCase3 =
    box7 === currentTurn && box8 === currentTurn && box9 === currentTurn;
  var winCase4 =
    box1 === currentTurn && box4 === currentTurn && box7 === currentTurn;
  var winCase5 =
    box2 === currentTurn && box5 === currentTurn && box8 === currentTurn;
  var winCase6 =
    box3 === currentTurn && box6 === currentTurn && box9 === currentTurn;
  var winCase7 =
    box1 === currentTurn && box5 === currentTurn && box9 === currentTurn;
  var winCase8 =
    box3 === currentTurn && box5 === currentTurn && box7 === currentTurn;

  var currentPlayer;

  if (
    winCase1 ||
    winCase2 ||
    winCase3 ||
    winCase4 ||
    winCase5 ||
    winCase6 ||
    winCase7 ||
    winCase8
  ) {
    if (currentTurn === "X") {
      currentPlayer = player1Name;
    } else {
      currentPlayer = player2Name;
    }

    return currentPlayer;
  }
};

var allBoxes = document.querySelectorAll(".box");
for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.className.includes("disabled")) {
      return;
    }

    e.target.classList.add("disabled");
    // show X or o
    e.target.textContent = currentTurn;
    // determine if winner
    var currentPlayer = determineWinner();
    // toggle between X and 0
    if (currentTurn === "X") {
      document.querySelector("#message").textContent =
        player2Name + " goes (O)";
      currentTurn = "O";
    } else {
      document.querySelector("#message").textContent =
        player1Name + " goes (X)";
      currentTurn = "X";
    }

    if (currentPlayer) {
      document.querySelector("#message").textContent =
        currentPlayer + " wins!!!";
    }
  });
}

// for (var i = 0; i < allBoxes.length; i++) {
//   allBoxes[i].addEventListener(box1,box2,box3)=== "X" ); {
//     if (box1,box2,box3 === "X") {
//       document.querySelector("#message").textContent = player1Name + "wins";
//     } else {
//       if (box1,box2,box3 === "O") {
//         document.querySelector("#message").textContent = player2Name + "wins";
//     }
//   }
// }
