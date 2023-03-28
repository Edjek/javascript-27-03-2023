/* --------------------------- FONCTIONS --------------------------- */

// Déclaration de fonction
function add(x, y) {
    return x + y;
}

// Une fonction n'est executée que lorsqu'elle est appelée
let resultat = add(7, 3);
console.log(resultat);

// Une procedure ne retourne rien elle execute des actions
function helloWorld() {
    console.log('Hello, world!');
}

/* --------------------------- PORTEE DES VARIABLES --------------------------- */

// La portée (scope) d'un objet est la portion de code dans laquelle une variable est accessible.

// PORTEE GLOBAL
// Une variable déclarée en dehors de toute fonction ou bloc de code a une portée globale.
// Cela signifie qu'elle peut être utilisée et modifiée dans n'importe quelle partie de votre code,
// y compris à l'intérieur de fonctions ou de blocs de code.

// PORTEE DE BLOC
// La portée d'une variable déclarée à l'intérieur d'un bloc est limitée à ce bloc.
// Cela signifie que la variable ne sera pas accessible en dehors de ce bloc.
if (true) {
    let x = 10;
    console.log(x); // affiche 10
}

console.log(x); // génère une erreur : x n'est pas défini dans le scope global
