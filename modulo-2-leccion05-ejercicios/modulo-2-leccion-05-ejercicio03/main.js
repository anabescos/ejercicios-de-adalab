'use strict';

const paragraph = document.querySelector ('.paragraph');

function add () {

paragraph.innerHTML += '<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cum voluptates illo consectetur aperiam. Similique quod, rem porro corrupti eligendi iste aperiam ratione minus. </p>';

}

paragraph.addEventListener ('mouseover', add);