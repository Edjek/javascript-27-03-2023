/* --------------------------- Les Commentaires --------------------------- */

// Un commentaire sur une ligne en Javascript
/* 
    Un commentaire multiligne
    en Javascript 
*/

/* --------------------------- Affichage --------------------------- */

//Afficher des informations dans la console de debbugage du navigateur
console.log('Hello World!');

//Afficher une boite de dialogue avec champs à remplir
// prompt('Quel age avez-vous ?');

/* --------------------------- Les Variables --------------------------- */

//  Déclaration d'une Variable
let uneVariable;

// Affectation d'une variable
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

/* --------------------------- La Concatenation --------------------------- */

// Concaténation (Afficher du texte et des variables)
let age = 18;
console.log("J'ai " + age + ' ans');
console.log("J'ai " + age + ' ans');
console.log(`J'ai ${age} ans `);

let lastName = 'Rachid';
let firstName = 'EDJEKOUANE';
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log("Bonjour, je m'appelle " + firstName + ' ' + lastName);
console.log(`Bonjour, je m'appelle ${firstName} ${lastName}`);

/* --------------------------- Les Types Primitifs --------------------------- */

let string2 = 'Je suis du texte';
let number = 18;
let decimal = 20.3;
let booleen = true;
let booleen2 = false;
let nul = null;
let test;

console.log(typeof string2);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof booleen);
console.log(typeof booleen2);
console.log(typeof nul);
console.log(typeof test);

/* --------------------------- Les Opérateurs Arithmétiques --------------------------- */

// +, -, /, *, %

// let number2 = prompt('Donnez-moi un nombre ?')
// let number3 =prompt('Donnez-moi un deuxieme nombre ?')
// let result = number2 * number3
// console.log(result);

/* --------------------------- Instructions Conditionnelles --------------------------- */

// Les opérateurs de comparaison (==, !=, >, >=, <, <=)

let condition = 19;

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

// Les opérateurs de comparaison (==, !=, >, >=, <, <=)
if (condition >= 18) {
    console.log('Tu es majeur, bravo');
} else {
    console.log('Houston, nous avons un problème');
}

// Les opérateurs logique OU (||) et ET (&&)
let permis = true;
if (condition >= 18 || permis == true) {
    console.log('Tu es majeur et tu as le permis');
} else {
    console.log('Houston, nous avons 2 problèmes');
}

/*
    Demandez à l'utilisateur son âge
    si mineur demande a ses parent l'autorisation
    si moins de 64 ans droits a des indemnites
        demandez son statut
        si salarié => demander au rh
        si independant urssaf
    si a plus de 64 ans désolé vous devriez être à la retraite
*/

let age3 = prompt('Quel est votre âge?');

if (age3 < 18) {
    console.log("Demandez à vos parents l'autorisation d'être sur ce site");
} else if (age < 64) {
    let status = prompt('Quel est votre statut');

    if (status == 'salarié') {
        console.log("Demandez plus d'infos aux RH");
    } else if (status == 'indépendants') {
        console.log("Demandez plus d'info à l'Urssaf");
    }
} else if (age >= 64) {
    console.log('Vous devriez être à la retraite');
}

/*
    L'instruction switch évalue une expression et, 
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
    default:
        console.log('je ne connais pas ce fruit');
        break;
}

// Ecrire un algorithme qui inverse les valeurs de deux variables a et b quel que soit le contenu de a et de b
let a = 25;
let b = 32;

console.log(`la variable a vaut : ${a} et la variable b vaut : ${b}`);
let temp = a;
a = b;
b = temp;
console.log(`la variable a vaut : ${a} et la variable b vaut : ${b}`);

// Ecrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).
// let price = prompt('Quel et le prix HT?');
// console.log(price * 1.196);

// price = price * 1.196;

// Écrire un algorithme qui calcule la moyenne de trois nombres a, b et c. Le résultat sera stocké dans une variable m. Puis l'afficher
let c = 12;
let d = 17;
let e = 12;
let m = (c + d + e) / 3;

console.log(m);

// Écrire un algorithme qui renvoie le max de deux nombres x et y. Le résultat sera stocké dans une variable max.
let x = 45;
let y = 65;
let max;

if (x > y) {
    max = x;
} else {
    max = y;
}
console.log(max);

// Écrire un algorithme qui stocke dans une variable max le maximum de trois variables a, b et c données.
let l = 19;
let k = 67;
let n = 87;
let result;

if (l > k && l > n) {
    result = l;
} else if (k > l && k > n) {
    result = k;
} else {
    result = n;
}

console.log(result);

/* --------------------------- Les Boucles --------------------------- */

// Boucle tant que (while)
let boucle = 120;
while (boucle <= 10) {
    // boucle = boucle + 1;
    // boucle++;
    boucle *= 2;
}

// Boucle do ... while execute toujours une fois l'instruction avant de la vérifier
do {
    boucle++;
    console.log(boucle);
} while (boucle <= 10);

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur, en lui indiquant si il est au dessus ou au dessous de la bonne valeur
let resultat = prompt('Donnez-moi un chiffre');

while (resultat != 7) {
    if (resultat > 7) {
        console.log('');
        resultat = prompt('le nombre est plus petit, donnez-moi un autre chiffre');
    } else {
        console.log('');
        resultat = prompt('Le nombre est plus grand, donnez-moi un autre chiffre');
    }
}

console.log('Bravo, le chiffre était 7!');

// do {
//     let resultat = prompt('Donnez moi ta réponse');
// } while (resultat != 7);
