'use strict';

function logBoxSize (borderBox, width, padding, borderSize){
let newWidth;

    if (borderBox === true){
        newWidth = width;
    }
    else {
        newWidth = width + (padding*2) + (borderSize*2);
    }
    
    console.log (`El ancho del contenido es: ${width} y el ancho total de la caja es: ${newWidth}`);
     return newWidth;
}
const result = logBoxSize (false, 100, 10, 5);

console.log(result)