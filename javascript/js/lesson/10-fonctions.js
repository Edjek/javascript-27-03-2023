/* --------------------------- FONCTIONS --------------------------- */

// Déclaration de fonction
function add(x, y) {
    return x + y;
}

// Une fonction n'est executée que lorsqu'elle est appelée
let resultat = add(7, 3);
console.log(resultat);

// Une procedure est une fonction qui ne retourne rien, elle execute des actions
function helloWorld() {
    console.log('Hello, world!');
}
helloWorld();

// Il est possible de sauvegarder une fonction dans une variable
// On les appelles des fonctions anonymes
const divide = function (x) {
    return x / 2;
};
divide(2);

// Il existe une nouvelle syntaxe (les fonctions fléchées)
// Elles permettent d'écrire plus simplement
const multiply1 = (x) => {
    return x * x;
};
const multiply2 = (x) => x * x;
const multiply3 = x => x * x;
console.log(multiply3(12));

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
