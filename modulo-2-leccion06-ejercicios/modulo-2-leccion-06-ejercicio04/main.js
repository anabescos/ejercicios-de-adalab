'use strict';

const buttonElement = document.querySelector ('.button');
console.log(buttonElement)

function isValidEmail() {}

function handleButton (event) {
    console.log (event.type);
};
console.log('Muéstrame');

buttonElement.addEventListener('click', handleButton);