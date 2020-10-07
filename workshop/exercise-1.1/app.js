// Exercise 1.1
// ------------

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
  }, 1000);
});

console.log("exercise 1.1");
