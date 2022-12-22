// АККОРДЕОН
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var scrollbar = document.body.clientWidth - window.innerWidth + "px";
  console.log(scrollbar);
  document
    .querySelector('[href="#openModal"]')
    .addEventListener("click", function () {
      document.body.style.overflow = "hidden";
      document.querySelector("#openModal").style.marginLeft = scrollbar;
    });
  document
    .querySelector('[href="#close"]')
    .addEventListener("click", function () {
      document.body.style.overflow = "visible";
      document.querySelector("#openModal").style.marginLeft = "0px";
    });