const img = document.querySelector("#section1-imagen");

const mensajeStickers = document.querySelector("#mensajeStickers");
const btnValidar = document.querySelector("#btnStickers");

const btnPassword = document.querySelector("#btnPassword");
const mensajePassword = document.querySelector("#mensajePassword");

img.addEventListener("click", function () {
  if (img.style.border === "") {
    img.style.border = "2px solid red";
  } else {
    img.style.border = "";
  }
});

function validarCantidad1() {
  let cant1 = document.querySelector("#cantidad1").value;
  if (Number(cant1) < 0) {
    caja1.innerHTML = 0;
  }
}

btnValidar.addEventListener("click", function () {
  let cant1 = document.querySelector("#cantidad1").value;
  let cant2 = document.querySelector("#cantidad2").value;
  let cant3 = document.querySelector("#cantidad3").value;
  let total = Number(cant1) + Number(cant2) + Number(cant3);
  if (total > 10) {
    mensajeStickers.innerHTML = "Llevas demasiados stickers";
    mensajeStickers.style.color = "red";
  } else {
    mensajeStickers.innerHTML = "Llevas " + total + " stickers.";
    mensajeStickers.style.color = "black";
  }
});

btnPassword.addEventListener("click", function () {
  let clave1 = document.querySelector("#clave1").value;
  let clave2 = document.querySelector("#clave2").value;
  let clave3 = document.querySelector("#clave3").value;
  let clave = clave1 + clave2 + clave3;
  if (clave === "911") {
    mensajePassword.innerHTML = "password 1 correcto";
    mensajePassword.style.color = "black";
  } else if (clave === "714") {
    mensajePassword.innerHTML = "password 2 correcto";
    mensajePassword.style.color = "black";
  } else {
    mensajePassword.innerHTML = "password incorrecto";
    mensajePassword.style.color = "red";
  }
});
