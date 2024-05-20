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
let move = 0;
let num1 = 0;
let num2 = 0;

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

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (Gamestatus == "No winner" && move < 9) {
      if (button.innerHTML == "") {
        areaClicked = button.value;
        areaClicked = [areaClicked[0], areaClicked[2]];
        button.innerHTML = "X";
        game[areaClicked[0]][areaClicked[1]] = "X";
        while (game[num1][num2] != "") {
          num1 = RandomInt(0, 2);
          num2 = RandomInt(0, 2);
        }
        game[num1][num2] = "O";
        buttons[num1 * 3 + num2].innerHTML = "O"; //buttons num1 * 3 wybiera pierwszy indeks tablicy, a num2 wybiera drugi indeks tablicy
      }
    }
    Gamestatus = findWinner(game);
    gameStatusSpan.innerHTML = Gamestatus;
    if (Gamestatus != "No winner" || move == 9) {
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
  move = 0;
});
