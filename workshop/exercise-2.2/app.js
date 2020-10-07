const main = document.getElementById("main");

// 20 buttons

for (let i = 1; i <= 20; i++) {
  let btns = document.createElement("button");
  main.appendChild(btns);
  btns.innerHTML = `${i}`;
  btns.classList.add("button");
  btns.addEventListener("click", function () {
    let colorChange = false;
    if (btns.style.backgroundColor === "green") {
      btns.style.backgroundColor = "red";
    } else {
      btns.style.backgroundColor = "green";
    }
  });
}
