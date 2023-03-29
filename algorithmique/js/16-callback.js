/* --------------------------- 16 - CALLBACKS --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

function add(a) {
    return a + 10;
}

function divide(a) {
    return a / 2;
}

function multiply(a) {
    return a * 2;
}

function math(number, callback) {
    let variable = 1;
    return callback(number, variable);
}

let result = math(12, function (a, b) {
    console.log(b);
    return a + b;
});

console.log(result);
