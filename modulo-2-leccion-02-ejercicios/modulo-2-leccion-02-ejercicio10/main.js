'use strict';

const deHtml = document.querySelector('.js-age');
const ageAna = parseInt(deHtml.innerHTML);
const year = 365;
const day = 24;


console.log (`Ana tiene ${ageAna * year * day} horas`);