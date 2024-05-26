buttons = document.querySelectorAll(".area");
gameStatusSpan = document.querySelector(".gameStatus");
popup = document.querySelector("#popup");
resetButton = document.querySelector("#reset");
game = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

let Gamestatus = "No winner";
let computerMoveDone = true;
let move = 0;
let num1 = 0;
let num2 = 0;

function findWinner(array) {
  for (let i = 0; i < 3; i++) {
    if (array[i][0] === array[i][1] && array[i][1] === array[i][2]) {
      if (array[i][0] === "X") {
        return "X wygrywa";
      } else if (array[i][0] === "O") {
        return "O wygrywa";
      }
    }
  }
  for (let i = 0; i < 3; i++) {
    if (array[0][i] === array[1][i] && array[1][i] === array[2][i]) {
      if (array[0][i] === "X") {
        return "X wygrywa";
      } else if (array[0][i] === "O") {
        return "O wygrywa";
      }
    }
  }
  if (array[0][0] === array[1][1] && array[1][1] === array[2][2]) {
    if (array[0][0] === "X") {
      return "X wygrywa";
    } else if (array[0][0] === "O") {
      return "O wygrywa";
    }
  }
  if (array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
    if (array[0][2] === "X") {
      return "X wygrywa";
    } else if (array[0][2] === "O") {
      return "O wygrywa";
    }
  }
  return "No winner";
}

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerMove() {
  if (Gamestatus === "No winner" && move < 9) {
    num1 = RandomInt(0, 2);
    num2 = RandomInt(0, 2);
    while (game[num1][num2] !== "") {
      num1 = RandomInt(0, 2);
      num2 = RandomInt(0, 2);
    }
    game[num1][num2] = "O";
    buttons[num1 * 3 + num2].innerHTML = "O";
    buttons[num1 * 3 + num2].classList.add("O");
    move++;
    Gamestatus = findWinner(game);
    gameStatusSpan.innerHTML = Gamestatus;
    if (Gamestatus !== "No winner" || move === 9) {
      popup.classList.remove("hidden");
    }
    computerMoveDone = true;
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (Gamestatus === "No winner" && move < 9 && computerMoveDone) {
      if (button.innerHTML === "") {
        computerMoveDone = false;
        let areaClicked = button.value;
        areaClicked = [parseInt(areaClicked[0]), parseInt(areaClicked[2])];
        button.innerHTML = "X";
        button.classList.add("X");
        game[areaClicked[0]][areaClicked[1]] = "X";
        move++;
        Gamestatus = findWinner(game);
        gameStatusSpan.innerHTML = Gamestatus;
        if (Gamestatus !== "No winner" || move === 9) {
          popup.classList.remove("hidden");
        } else {
          setTimeout(computerMove, 1000);
        }
      }
    }
  });
});

resetButton.addEventListener("click", function () {
  game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  buttons.forEach(function (button) {
    button.innerHTML = "";
    button.classList.remove("X");
    button.classList.remove("O");
  });
  popup.classList.add("hidden");
  Gamestatus = "No winner";
  gameStatusSpan.innerHTML = Gamestatus;
  computerMoveDone = true;
  move = 0;
});
