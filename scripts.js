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