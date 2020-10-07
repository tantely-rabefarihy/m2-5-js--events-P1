// Exercise 1.2
// ------------
let randomTimer = Math.floor(Math.random() * 10);
console.log(randomTimer);

let timeSpan = document.getElementById("time");
timeSpan.innerText = randomTimer;

console.log(timeSpan);

let change = false;

let clicked = document.addEventListener("click", function () {
  change = true;
});

let pageLoad = window.addEventListener("load", function () {
  const timer = setTimeout(function () {
    if (change === true) {
      document.getElementById("result").innerHTML = "You Win!";
    } else {
      document.getElementById("result").innerHTML = "You Lose!";
    }

    console.log("time's up");
  }, randomTimer * 1000);
});

console.log("exercise 1.2");
