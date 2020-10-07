const main = document.getElementById("main");

// generate the buttons

for (let i = 1; i <= 20; i++) {
  let btns = document.createElement("button");
  main.appendChild(btns);
  btns.innerHTML = `${i}`;
  btns.addEventListener("click", function () {
    if (btns.style.backgroundColor === "green") {
      btns.style.backgroundColor = "red";
    } else {
      btns.style.backgroundColor = "green";
    }
  });

  let randomNumber1 = Math.floor(Math.random() * 95);
  let randomNumber2 = Math.floor(Math.random() * 95);
  btns.style.position = "absolute";
  btns.style.left = `${randomNumber1}vw`;
  btns.style.top = `${randomNumber2}vh`;

  console.log(randomNumber1, randomNumber2);
}
