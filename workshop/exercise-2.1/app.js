let main = document.getElementById("main");

// Generating 20 buttons

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  main.appendChild(button);
  button.innerHTML = `${i}`;
  button.classList.add("btn");
  button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
  });
}
