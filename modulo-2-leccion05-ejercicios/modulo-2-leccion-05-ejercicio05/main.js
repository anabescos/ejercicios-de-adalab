'use strict';

const keyBackground = document;

function setBackground (event) {
    if(event.key === 'r'){
        console.log('Hola');
        document.body.style.backgroundColor = 'red';
        // keyBackground.classList.toggle ('page');
    }
    if (event.key === 'm'){
        // keyBackground.classList.toggle ('page2');
        document.body.style.backgroundColor = 'purple';
    }
}

keyBackground.addEventListener ('keydown', setBackground);