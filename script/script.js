'use strict';
//variables
let burger = document.querySelector('.burger');
let body = document.querySelector('body');


//listeners
burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    body.classList.toggle('active');
});
