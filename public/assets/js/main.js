// const { exit } = require("browser-sync");

$(document).ready(() => {
  const hamburger = document.querySelector("#hamburger");
  const menuMobile = document.querySelector(".menu-mobile");
  const close = document.querySelector("#close");
  hamburger.addEventListener("click", open);
  close.addEventListener("click", open);

  function open() {
    if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
    } else {
      menuMobile.classList.add("open");
    }
  }
});
