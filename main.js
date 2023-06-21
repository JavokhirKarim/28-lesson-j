document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("nav ul").classList.toggle("showmenu");
});
window.addEventListener("scroll", function () {
  toggleBacktop();
});
