'use strict';


const adalabersList = [
  { name: 'Irene',
    surname: 'Mañas',
    phone: 677464646
  },
  {
    name: 'María',
    surname: 'Virumbrales',
    phone: 677464523
  },
  {
    name: 'Ana',
    surname: 'Bescós',
    phone: 677464646
  },
]

const optionElement = document.querySelector('.option');
const selectElement= document.querySelector('.button');
//const ireneElement= document.querySelector('.option1');
//const maríaElement= document.querySelector('.option2');
//const anaElement= document.querySelector('.option3');
const nameElement= document.querySelector('.js-name');
const surnameElement= document.querySelector('.js-surname');
const telElement= document.querySelector('.js-tel');

function handleData(){
  for (let index = 0; index < adalabersList.length; index++) {
    if (index === parseInt(selectElement.value)) {
      console.log('Clickada', adalabersList[index]);
    }
  }
  for (const adalaberItem of adalabersList) {
    if (adalaberItem.name=== selectElement.value) {
      console.log('Clickada', adalaberItem);
      telElement.value = adalaberItem.phone
    }
    //console.log(adalaberItem.name, selectElement.value);
  }

}

selectElement.addEventListener('change', handleData);