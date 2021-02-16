'use strict';


const marks = [5, 4, 6, 7, 9];
// se puede sumar simplemente pero si hay que poner funcion hay que hacerlo con parseInt.
const getNewMarks = (x) => x + 1; //
const inflatedMarks = marks.map(getNewMarks);
console.log(inflatedMarks);
