'use strict';

function ivaCalc (a) {

    const iva = (a/100)*21;
    const total = a + iva;

    return (`Precio sin IVA: ${a}, IVA: ${iva} y total: ${total}`) ;
}

const priceResult = ivaCalc (10);
 console.log(priceResult);
