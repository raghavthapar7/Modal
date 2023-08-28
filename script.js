"use strict";

let modal = document.querySelector(".modal-overlay");
let btnClose = document.querySelector(".btn-close");
let btnOpen = document.querySelector(".btn-open");

btnOpen.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

btnClose.addEventListener("click", function () {
  modal.classList.add("hidden");
});
