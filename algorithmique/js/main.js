/*
    --1-- COMMENTAIRES
    --2-- AFFICHAGE
    --3-- VARIABLES
    --4-- CONCATENATION
    --5-- TYPES DE DONNEES PRIMITIFs
    --6-- OPERATEURS ARITHMETIQUES
    --7-- CONDITIONS
    --8-- OPERATEURS
    --9-- SWITCH
    --10-- LES BOUCLES
    --14-- ARRAY (TABLEAU)
    --15-- OBJECT
    --12-- LES FONCTIONS PREDEFINIES
    --13-- FONCTION UTILISATEUR
*/

/* --------------------------- 1 - COMMENTAIRES --------------------------- */

// Un commentaire sur une ligne en Javascript
/* 
    Un commentaire multiligne
    en Javascript 
*/

/* --------------------------- 2 - AFFICHAGE --------------------------- */

//Afficher des informations dans la console de debbugage du navigateur
console.log('Hello World!');

//Afficher une boite de dialogue avec champs à remplir
// prompt('Quel age avez-vous ?');

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

/* --------------------------- 6 - OPERATEURS ARITHMETIQUE --------------------------- */

// +, -, /, *, %

let operation = 10 + 5; //Addition
console.log('operation'); //15

operation = 10 - 5; //Soustraction
console.log('operation'); //5

operation = 10 * 5; //Multiplication
console.log('operation'); //50

operation = 10 / 5; //Division
console.log('operation'); //2

operation = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log('operation'); //1

let number = prompt('Donnez-moi un nombre ?');
let number2 = prompt('Donnez-moi un deuxieme nombre ?');
let result = number * number2;
console.log('result');
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

/* --------------------------- BOUCLES --------------------------- */

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
