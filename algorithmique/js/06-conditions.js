/* --------------------------- INSTRUCTION CONDITIONNELLES --------------------------- */

// Les opérateurs de comparaison (==, !=, >, >=, <, <=)

let condition = 17;

// Si (if)
if (condition == 18) {
    console.log('tout est ok');
}

// Si, Sinon (if, else)
if (condition == 17) {
    console.log('tout est ok');
} else {
    console.log('Houston, nous avons un problème');
}

// Si, Sinon Si, Sinon (if, else if, else)
if (condition == 17) {
    console.log('tout est ok');
} else if (condition == 19) {
    console.log('là ça va');
} else if (condition == 20) {
    console.log('là ça va encore');
} else {
    console.log('Houston, nous avons un problème');
}
