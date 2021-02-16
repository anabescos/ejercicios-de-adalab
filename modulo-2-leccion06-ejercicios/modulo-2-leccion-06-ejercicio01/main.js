'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    career: 'periodista'
};
const sentenceElement = document.querySelector('.sentence');

sentenceElement.innerHTML = (`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} y soy ${adalaber1.career}`);