/*
    --1-- COMMENTAIRES
    --2-- AFFICHAGE
    --3-- VARIABLES
    --4-- CONCATENATION
    --5-- TYPES DE DONNEES
    --6-- OPERATEURS ARITHMETIQUES
    --7-- CONDITIONS
    --8-- OPERATEURS
    --9-- SWITCH
    --10-- BOUCLES
    --11-- FONCTIONS
*/

/* --------------------------- 1 - COMMENTAIRES --------------------------- */

// Un commentaire sur une ligne en Javascript
/* 
    Un commentaire multiligne
    en Javascript 
*/

/* --------------------------- AFFICHAGE --------------------------- */

// Afficher des informations dans la console de debbugage du navigateur
console.log('Hello World!');

// Afficher une boite de dialogue avec un champs à remplir
// prompt('Quel age avez-vous ?');
// On peut récupérer ce qui est tapé en affectant prompt() à une variable.
// let message = prompt('Que voulezme dire ?')

//Afficher des informations dans un pop-up (ok)
// alert('Hello, World!')

//Inserer du code HTML dans ma page
document.write('<h1>Un h1 en JS</h1>');

/* --------------------------- 3 - VARIABLES --------------------------- */

//  DECLARATION d'une Variable
let uneVariable;

// Le mot clé const permet de déclarer des constantes
const constante = 'Je suis une constante, je ne peux pas être modifié!';

// Le mot clé var permet de déclarer des variables
// c'est une pratique désuète (c'était la seule façon avant 2015)
var past = 'je suis dépassé';

// AFFECTATION d'une variable (donne une valeur à une variable)
uneVariable = 'Je suis une variable!';

// Les 2 se font généralement en même temps
// Les variables sont sensibles à la casse (majuscules/minuscules)
let helloWorld = 'Hello world!';

// Affichage d'une variable dans la console
console.log(uneVariable);

// On peut changer la valeur d'une variable
helloWorld = 'Coucou';

// Affectation d'une variable dans une autre variable
let affectation = helloWorld;

/* --------------------------- 4 - CONCATENATION --------------------------- */

// Concaténation (Afficher du texte et des variables)
let age = 18;
console.log("J'ai " + age + ' ans');
console.log("J'ai " + age + ' ans');
console.log(`J'ai ${age} ans`);

let lastName = 'Rachid';
let firstName = 'EDJEKOUANE';
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log(`Bonjour, je m'appelle ${firstName} ${lastName}`);

/* --------------------------- 5 - TYPES DE DONNEES PRIMITIFS --------------------------- */

// Chaine de cactères (String)
let string2 = 'Je suis du texte';

//Tous les types d'ecritures numériques sont possibles (positif, negatif,decimal)
let nombre = 18; //number
let decimal = 20.3; //number
let negatif = -10;

// Booléens (Boolean)
// Variable de type booleen n'a que 2 valeurs possibles : TRUE ou FALSE
let booleen = true; //boolean
let booleen2 = false; //boolean

let nul = null; //null

let test; //undefined

// La methode typeof() renvoie le type de donnée de la variable
console.log(typeof string2);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof booleen);
console.log(typeof booleen2);
console.log(typeof nul);
console.log(typeof test);

/* --------------------------- OPERATEURS ARITHMETIQUE --------------------------- */

// +, -, /, *, %

let operation = 10 + 5; //Addition
console.log(`le resultat est ${operation}`); //15

operation = 10 - 5; //Soustraction
console.log(`le resultat est ${operation}`); //5

operation = 10 * 5; //Multiplication
console.log(`le resultat est ${operation}`); //50

operation = 10 / 5; //Division
console.log(`le resultat est ${operation}`); //2

operation = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log(`le resultat est ${operation}`); //1

let number = prompt('Donnez-moi un nombre ?');
let number2 = prompt('Donnez-moi un deuxieme nombre ?');
let result = number * number2;
console.log(`le resultat de la multiplication est ${result}`);
/* --------------------------- 7 - INSTRUCTION CONDITIONNELLES --------------------------- */

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

/* --------------------------- 8 - OPERATEURS --------------------------- */

// Les opérateurs de comparaison (==, ===, !=, !==, >, >=, <, <=)
if (condition >= 18) {
    console.log('Tu es majeur, bravo');
} else {
    console.log('Houston, nous avons un problème');
}

// Les opérateurs logique OU (||) et ET (&&)
let permis = true;
if (condition >= 18 || (permis == true && test === 'toto')) {
    console.log('Tu es majeur et tu as le permis');
} else {
    console.log('Houston, nous avons 2 problèmes');
}

/* --------------------------- 9 - CONDITION SWITCH --------------------------- */
/*
    L'instruction switch évalue une expression et 
    selon le résultat obtenu et le cas associé, 
    exécute les instructions correspondantes.
 */
let expr = 'banane';

switch (expr) {
    case 'orange':
        console.log("c'est plein de vitamines C");
        break;
    case 'pomme':
        console.log("c'est plein de peptides");
        break;
    case 'banane':
        console.log("c'est plein de potassium");
        break;
    case 'kiwi':
    case 'papaye':
        console.log("c'est un fruit exotique");
        break;
    default:
        console.log('je ne connais pas ce fruit');
        break;
}

/* --------------------------- 10 - BOUCLES --------------------------- */

//Les boucles sont des structures permettant d'executer plusieurs fois  des instructions.

/*
    la principale différence entre "for" et "while" est que :
    "for" est généralement utilisé lorsque le nombre d'itérations est connu à l'avance,
    "while" est utilisé lorsque le nombre d'itérations est inconnu à l'avance et dépend d'une condition spécifique.
*/

// BOUCLE while(){...} (tant que)
let boucle = 5;

while (boucle <= 10) {
    console.log(boucle);
    boucle = boucle + 1;

    // SUCRE SYNTAXIQUE (version raccourci de boucle = boucle + 1)
    // boucle++;
    // boucle += 2;
}

// BOUCLE do{...}while() execute toujours une fois l'instruction avant de vérifier la condition
do {
    boucle++;
    console.log(boucle);
} while (boucle <= 10);

// Boucle (For)
let combien = 9;

for (let i = 0; i < 10; i++) {
    let res = i * combien;
    console.log(
        `${res} la table de multiplication de ${combien} : ${combien} * ${i} = ${res}`
    );
}

console.log(res);

/* --------------------------- 11 - FONCTIONS --------------------------- */

// Une fonction en JavaScript est un bloc de code réutilisable
// qui peut être appelé à partir d'autres parties de votre code pour effectuer une tâche spécifique.
// Les fonctions sont un moyen utile de segmenter votre code en tâches plus petites et plus faciles à gérer,
// et elles vous permettent également de réutiliser le même code plusieurs fois sans avoir à le copier et le coller.

// Déclaration de fonction
function afficherMessage() {
    console.log('Bonjour, tout le monde !');
}

// Une fonction n'est executée que lorsqu'elle est appelée
afficherMessage();

// Déclaration de fonction avec 2 parametres
function add(x, y) {
    return x + y;
}

let resultat = add(7, 3);
console.log(resultat);

// Il est également possible de stocker une fonction dans une variable et de l'appeler en utilisant cette variable
let multiplier = function (a, b) {
    return a * b;
};

let res = multiplier(2, 3);
console.log(res);
