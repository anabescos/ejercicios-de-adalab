'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false
    }
  ];
  console.log(`Hay ${tasks.length} tareas`);

const task1Element = document.querySelector ('.list');

function isTaskCompleted () {

    for (let index = 0; index < tasks.length; index++) {
        
        if (tasks[index].completed === true) {
        task1Element.innerHTML += `<li><s>${tasks[index].name}</s></li>`;
        }
        else{
        task1Element.innerHTML += `<li>${tasks[index].name}</li>`;

        }
    }
}


isTaskCompleted();

  
  

 