'use strict';

const boxElement = document.querySelector ('.box');

function setBackground (event){

    console.log(event.currentTarget);

    if (window.scrollY >= 250) {
    boxElement.classList.toggle = ('.box2');
    }

}

boxElement.addEventListener ('scroll', setBackground);