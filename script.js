var button = document.getElementById("leia-me");

button.addEventListener("click", function () {
  var card = document.querySelector(".card");
  card.classList.toggle("active");

  if (card.classList.contains("active")) {
    return (button.textContent = "Ler menos");
  }

  button.textContent = "Ler mais";
});
