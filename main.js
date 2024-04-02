let home = document.querySelector(".home");

window.addEventListener("load", () => {
  home.classList.remove("hidden");
});
let navigation = document.querySelector(".header-content nav");
let menu = document.querySelector(".header-content .toggle-menu");
let badr = document.querySelector(".header-content .badr");
menu.addEventListener("click", () => {
  badr.style.cssText = "right: 0; opacity: 1";
});
