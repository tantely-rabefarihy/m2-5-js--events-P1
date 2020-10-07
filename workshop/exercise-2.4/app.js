const main = document.getElementById("main");
const startBtn = document.getElementById("start-button");
let randomBtns = Math.round(Math.random() * 10) + 1;
const clickedState = [];
let timeLimit = 5000;
const timer = document.getElementById("timer");
const gameContainer = document.getElementById("game-container");
const message = document.getElementById("message");

// -------- Starting the game --------

function checkArray(arr) {
  return arr.every(function (item) {
    return item;
  });
}

function startGame() {
  //remove start button
  startBtn.style.display = "none";
  // create random buttons & positionning numbers

  for (let i = 0; i < randomBtns; i++) {
    let btns = document.createElement("button");

    btns.classList.add("button");
    btns.innerHTML = `${i}`;
    btns.id = `btn-${i}`;
    let randomNumber1 = Math.floor(Math.random() * 90);
    let randomNumber2 = Math.floor(Math.random() * 90);
    btns.style.position = "absolute";
    btns.style.top = `${randomNumber1}%`;
    btns.style.left = `${randomNumber2}%`;

    gameContainer.appendChild(btns);

    clickedState.push(false);

    // change buttons color
    btns.addEventListener("click", function (event) {
      btns.style.backgroundColor = "green";
      const buttonId = event.target.id;
      const id = buttonId.split("-")[1];
      clickedState[id] = !clickedState[id];
    });

    // TIMER -------------
    timer.innerText = timeLimit / 1000;
    let seconds = timeLimit - 1000;
    const countdown = setInterval(function () {
      if (seconds < 1) {
        clearInterval(countdown);
        endGame();
      }
      timer.innerText = seconds / 1000;
      seconds -= 1000;
    }, 1000);
  }
  const buttonStatus = setInterval(function () {
    if (checkArray(clickedState)) {
      timer.innerText = 0;
      endGame();
      clearInterval(buttonStatus);
    }
  }, 400);
}

function toggleColor() {
  btns.style.backgroundColor = "green";
  const buttonId = event.target.id;
  const id = buttonId.split("-")[1];
  clickedState[id] = !clickedState[id];
}

function endGame() {
  message.style.height = "200px";
  message.style.paddingTop = "74px";
  if (checkArray(clickedState)) {
    message.innerText = "You Win!!!!";
    message.style.background = "green";
  } else {
    message.innerText = "You Lose...";
    message.style.background = "red";
  }

  for (let i = 0; i < randomBtns; i++) {
    document
      .getElementById(`btn-${i}`)
      .removeEventListener("click", toggleColor);
  }
}
