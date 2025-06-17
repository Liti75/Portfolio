const toggleBtn = document.getElementById("themeToggle");

// Apply saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerText = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
});
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
