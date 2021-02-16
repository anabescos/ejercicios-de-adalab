'use strict';

const boxElement = document.querySelector ('.box');

function setBackground (){


    if (window.scrollY > 250) {
    boxElement.classList.toggle('box2');
    // boxElement.classList.toggle('box1');
    }
    

}

window.addEventListener ('scroll', setBackground);