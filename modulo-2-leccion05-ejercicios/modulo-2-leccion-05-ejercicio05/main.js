'use strict';

const keyBackground = document.querySelector('.page');
console.log(document);
function setBackground (event) {
    if(event.key === 'r'){
        console.log(event.key);
        keyBackground.classList.toggle('page1');
    }
    if (event.key === 'm'){
        keyBackground.classList.toggle('page2');
    }
}

keyBackground.addEventListener ('keydown', setBackground);