'use strict';
const numbers = [1, 2, 3];
const list = document.querySelector('.list'); 

console.log(numbers);

function addNumbers (){
  
  for (let index = 0; index < numbers.length; index++) {
    const newItem = document.createElement ('li');
    const newContent = document.createTextNode(`${numbers[index]}`);
   newItem.appendChild(newContent);
    list.appendChild(newItem);
  }
  
}

addNumbers();



/*


// Ahora creamos algo de contenido
const newContent = document.createTextNode('Item nuevo');

// Y se lo añadimos a nuestro <li>
;
console.log(newItem); // Devuelve "<li>Item nuevo</li>" */