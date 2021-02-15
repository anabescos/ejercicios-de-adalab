'use strict';

const palettesContainer = document.querySelector ('.js-palettes-container');

let palettes=[];

function getDataFromApi() {
  fetch ('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
  .then(response => response.json())
  .then((data) => { 
    // console.log(data);
    palettes = data.palettes;
    console.log(palettes);
    
    saveInLocalStorage();
  });

}
    
// save in local storate

  function saveInLocalStorage() {
    const stringPalettes = JSON.stringify(palettes);
    console.log(stringPalettes);
    localStorage.setItem('palettes', stringPalettes);
  }

  // get from local storage

  function getFromLocalStorage (){
    const localPalettes = JSON.parse(localStorage.getItem('palettes'));
    if (localPalettes=== null){
      getDataFromApi();
      renderPalettes();
    }
    else {
      palettes = localPalettes;
      console.log = (palettes);
      renderPalettes();
    }
  }

  getFromLocalStorage();



function renderPalettes(){
  let htmlCode = '';
  for (const palette of palettes) {
    htmlCode +='<li class= "palette">';
    htmlCode +=`<h2 class="palette__title">${palette.name}</h2>`;
    htmlCode +=`<div class="palette__colors">`;
    for (const color of palette.colors) {
      htmlCode +=`<div class="palette__color" style="background-color: #${color}"></div>`;
    }
    htmlCode +='</div>';
    htmlCode +='</li>';
  }
  
 
  palettesContainer.innerHTML = htmlCode;
}

// añadir clase seleccionada
const paletteElements = document.querySelectorAll('.palette');


function handleFavorite(ev) {
 for

  paletteColorsElement.classList.add('palette--favorite');
}

paletteElement.addEventListener('click', handleFavorite);
//# sourceMappingURL=main.js.map
