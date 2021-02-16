/*'use strict';

const arr = [];

function get100Numbers () {

    for (let index = 1; index < 101; index++) {

        arr.push(index);
    
    }
    
}

// get100Numbers();
// console.log(arr);

function getReversed100Numbers () {
    get100Numbers();
    console.log(arr.reverse());
}

getReversed100Numbers ();*/

/*

Opción 2
'use strict';


function get100Numbers () {
    const arr = [];

    for (let index = 1; index < 101; index++) {

        arr.push(index);
    
    }
    return arr;
}

// get100Numbers();
// console.log(arr);

function getReversed100Numbers () {
   const arr = get100Numbers();
   console.log(arr)
   const arrReversed = arr.reverse()
   return arrReversed
}

const newArray = getReversed100Numbers ();
console.log(newArray);*/

'use strict';


function get100Numbers () {
    const arr = [];

    for (let index = 1; index < Math.random() * 100; index++) {

        arr.push(index);
    
    }
    return arr;
}

 get100Numbers();

console.log( get100Numbers());

function getReversed100Numbers () {
    const arr = get100Numbers();
    console.log(arr)
    const arrReversed = arr.reverse()
    return arrReversed
 }
//docum

function handleReverse (ev) {

}

//addEventListener
/*// console.log(arr);

function getReversed100Numbers () {
   const arr = get100Numbers();
   console.log(arr)
   const arrReversed = arr.reverse()
   return arrReversed
}

const newArray = getReversed100Numbers ();
console.log(newArray);*/