// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkModeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Animated Typing Effect
const animatedText = document.querySelector(".animated-text");
const messages = [
  "Full Stack Web Developer 💻",
  "MERN Stack Enthusiast 🚀",
  "Problem Solver 🛠️",
  "Tech Explorer 🌐"
];
let index = 0;

function changeText() {
  animatedText.style.opacity = 0;
  setTimeout(() => {
    animatedText.textContent = messages[index];
    animatedText.style.opacity = 1;
    index = (index + 1) % messages.length;
  }, 300);
}
setInterval(changeText, 2500);
changeText();

// Scroll Fade-in Animation
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(fader => {
    const rect = fader.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      fader.classList.add("visible");
    }
  });
});
