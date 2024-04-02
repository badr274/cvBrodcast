let terms = document.querySelector(".terms");

window.addEventListener("load", () => {
  terms.classList.remove("hidden");
});

let navigation = document.querySelector(".header-content nav");
let menu = document.querySelector(".header-content .toggle-menu");
let badr = document.querySelector(".header-content .badr");
menu.addEventListener("click", () => {
  badr.style.removeProperty("opacity");
});
