'use strict';

const nameAccess = document.querySelector('.name');
const spanResult = document.querySelector('.js-result');

if (nameAccess.value === `Liliana`) {
    spanResult.innerHTML = `Bienvenida, ${nameAccess.value}`;
}