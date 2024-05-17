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
let nowX = true;

const findWinner = function (array) {
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
      return "O";
    }
  }
  if (array[0][2] === array[1][1] && array[1][1] === array[2][0]) {
    if (array[0][2] === "X") {
      return "X wygrywa";
    } else if (array[0][2] === "O") {
      return "O";
    }
  }
  return "No winner";
};

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (Gamestatus == "No winner") {
      areaClicked = button.value;
      areaClicked = [areaClicked[0], areaClicked[2]];
      if (nowX) {
        button.innerHTML = "X";
        game[areaClicked[0]][areaClicked[1]] = "X";
        nowX = false;
      } else {
        button.innerHTML = "O";
        game[areaClicked[0]][areaClicked[1]] = "O";
        nowX = true;
      }
    }
    Gamestatus = findWinner(game);
    gameStatusSpan.innerHTML = Gamestatus;
    if (Gamestatus != "No winner") {
      popup.classList.remove("hidden");
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
    popup.classList.add("hidden");
  });
  Gamestatus = "No winner";
  nowX = true;
});
