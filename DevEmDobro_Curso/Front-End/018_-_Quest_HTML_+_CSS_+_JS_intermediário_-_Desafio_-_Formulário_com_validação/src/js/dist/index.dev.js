"use strict";

var campos = document.querySelectorAll('.campo-Formulario');
var enviar = document.getElementById('btn');
var formularioSection = document.querySelector('.formulario'); // let totalHeight = 0;

enviar.addEventListener('click', function () {
  verificarPreenchimento();
  ajustarTamanhoForm();
});

function verificarPreenchimento() {
  campos.forEach(function (item) {
    if (item.value.trim() !== '') {
      item.classList.add("preenchido");
      item.classList.remove("naoPreenchido");
      item.nextElementSibling.classList.remove("mostrar");
    } else {
      item.classList.add("naoPreenchido");
      item.classList.remove("Preenchido");
      item.nextElementSibling.classList.add("mostrar");
    }
  });
}

function ajustarTamanhoForm() {
  // Reseta a altura total a cada chamada da função
  var totalHeight = 0;
  var visibleCampos = document.querySelectorAll('.campo-obrigatorio.mostrar');
  visibleCampos.forEach(function (campoVisivel) {
    totalHeight += campoVisivel.offsetHeight;
  });
  var novaAltura = formularioSection.offsetHeight + totalHeight;

  if (novaAltura > formularioSection.offsetHeight) {
    formularioSection.style.height = novaAltura + 'px';
  }
}