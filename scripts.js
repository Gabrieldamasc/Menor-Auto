
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const opcoes = document.querySelector('.opcoes');
const menuIcon = document.querySelector('#menu-icon');

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
});

opcoes.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("fa-times");
    menuIcon.classList.toggle("fa-bars");
});


const corpo = document.body;
const header = document.querySelector(".header");
const localiza = document.querySelector(".localizacao");
const formulario = document.querySelector(".form-cadastro");
const Modo = document.querySelector(".MudarModo");
const botão = document.querySelector(".botao-enviar");
const backoverlay = document.querySelector(".background-overlay");
const gogmap = document.querySelector("#iframe-maps");
const footer = document.querySelector("footer");

//Variaveis


Modo.addEventListener("click", () => {
    backoverlay.classList.toggle("DarkMode")
    localiza.classList.toggle("DarkMode")
    formulario.classList.toggle("DarkMode")
    botão.classList.toggle("DarkMode")
    corpo.classList.toggle("DarkMode")
    gogmap.classList.toggle("DarkMode")
    footer.classList.toggle("DarkMode")

});

});

