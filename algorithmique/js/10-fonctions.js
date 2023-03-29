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
helloWorld();

/*
Creer une fonction
afficher 'Bonjour je m'appelle Rachid EDJEKOUANE
Executer la fonction
*/
function helloUser() {
    console.log("Bonjour, je m'appelle Rachid EDJEKOUANE");
}
helloUser();

/*
Creer une fonction qui prends 2 parametre
Affiche 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)
Execute
*/
function helloUserWithParameterInConsole(firstName, lastName) {
    console.log(`Bonjour, je m'appelle ${firstName} ${lastName} `);
}
helloUserWithParameterInConsole('Benoit', 'Assam');

/*
Creer une fonction qui prends 2 parametre
Retourne 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)
Afficher dans la console ET afficher document.write()
*/
function helloUserWithParameter(firstName, lastName) {
    return `Bonjour, je m'appelle ${firstName} ${lastName} `;
}

let firstName = 'rachid';
let lastName = 'edjekouane';
let message = helloUserWithParameter(firstName, lastName);

console.log(message);
document.write(helloUserWithParameter(firstName, lastName));
