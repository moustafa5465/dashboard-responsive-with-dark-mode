const closeBtn = document.getElementById("close-btn");
const menuBtn = document.getElementById("menu-btn");
const sideMenu = document.getElementById("Aside");
const darkMode = document.getElementById("dark_mode");
const lightMode = document.getElementById("light_mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  document.body.classList = ("dark-theme-variables");

});

lightMode.addEventListener("click", () => {
  document.body.classList = "none";
});
