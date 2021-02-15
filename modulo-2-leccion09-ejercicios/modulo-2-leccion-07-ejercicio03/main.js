'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenNumberArray = [];
const multiple3Array = [];

function bestLostNumber () {
    for (let index = 0; index < lostNumbers.length; index++) {
      
        const evenNumber = lostNumbers[index] % 2;
        if (evenNumber === 0) {
                evenNumberArray.push(lostNumbers[index]);
        } 
        
    }
}

bestLostNumber();
console.log (evenNumberArray);

function getMultiples3 () {
    for (let index = 0; index < lostNumbers.length; index++) {
      
        const multiple3 = lostNumbers[index] % 3;
        if (multiple3 === 0) {
            multiple3Array.push(lostNumbers[index]);
        } 
        
    }
}

getMultiples3();
console.log (multiple3Array);

const resultLostNumbers = evenNumberArray.concat(multiple3Array);
console.log(resultLostNumbers);