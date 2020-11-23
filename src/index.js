"use strict";
import "./scss/style.scss";

const btn = document.getElementById("btn-submit");

function handlerClick() {
  let formInput = document.getElementById("form-input");

  const span = document.getElementById("form-message");
  const div = document.getElementById("message");

  if (span.classList.contains("disable")) {
    span.classList.remove("disable").add("active");
  }
  div.innerText = formInput.value;
}

btn.addEventListener("click", handlerClick);
