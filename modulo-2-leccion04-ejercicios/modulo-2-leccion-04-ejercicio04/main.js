'use strict';

function number (a){
    
    let result
    
    if (a % 2 === 0) {
        result = true;
    }
    else {
        result= false;
    }

    return result;
}
const oddoreven = number (453);
console.log(`The result is ${oddoreven}`);