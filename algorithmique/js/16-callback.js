/* --------------------------- callback --------------------------- */


function add(x, y) {
    return x + y;
}

function divide(x, y) {
    return x / y;
}

function multiply(x, y) {
    return x * y;
}

function mathematique(x, y, callback) {
   return callback(y, y)
}

console.log(mathematique(12, 13,add));
console.log(mathematique(12, 13,multiply));

const res = mathematique(12,13, function(a,b){
    return a*b*(a+b)
})

console.log(res);





















mathematique(12, 13,multiply)