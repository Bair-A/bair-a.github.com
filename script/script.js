'use strict';
//variables
let burger = document.querySelector('.burger');
let body = document.querySelector('body');
let burgerMenu = document.querySelector('.burger__menu');


//listeners
burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
});
burgerMenu.addEventListener('click', (event) => {
   if (event.target.classList.contains('burger__menu-link')) {
       burger.classList.remove('active');
       body.classList.remove('active');
   }
})