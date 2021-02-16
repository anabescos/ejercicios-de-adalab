'use strict';

let arr = [];

function get100Numbers () {

    for (let index = 1; index < 101; index++) {

        arr.push(index);
    
    }
}

get100Numbers();
console.log(arr);