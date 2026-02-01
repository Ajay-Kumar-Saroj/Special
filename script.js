const text = "I made something special just for you...";
let index = 0;
const messageEl = document.getElementById("message");

function typeEffect() {
  if (index < text.length) {
    messageEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();

document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
});

