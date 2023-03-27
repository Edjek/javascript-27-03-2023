/*  --------------------------- Correction d'Algorithmique ---------------------------*/

// Algorithme de bienvenue qui affiche le nom et l'âge de l'utilisateur
let firstname = 'Rachid';
let ages = 39;
console.log('Bonjour ' + firstname + ', vous avez ' + ages + ' ans');

// Ecrire un algorithme qui demande à l'utilisateur son prénom et son nom et qui affiche ensuite la phrase
// "Bonjour prénom votre nom est nom"
let rename = prompt('Quel est votre nom?');
console.log('Bonjour prénom votre nom est ' + rename);

// Quelle sera la valeur de i à la fin de cet algorithme ?
i = 24;

// Ecrire un algorithme qui inverse les valeurs de deux variables A et B quel que soit le contenu de A et de B
let j = 18;
let k = 15;

let temp = j;
j = k;
k = temp;

// Ecrire un algorithme qui demande à l'utilisateur le prix Hors taxe d'un objet et qui donne sa valeur TTC (multiplier le prix par 1.196).
let ht = prompt('Quel est le prix Hors taxe ?');
let ttc = ht * 1.196;
console.log(ttc);

// Écrire un algorithme qui calcule la moyenne de trois nombres a, b et c. Le résultat sera stocké dans une variable m. Puis l'afficher
let a = 19;
let b = 12;
let c = 2;
let m = (a + b + c) / 3;
console.log('la moyenne est de ' + m);

// Ecrire un algorithme qui demande à l'utilisateur son age. Il indique ensuite à l'utilisateur quel film il peut aller voir.
// "Action Man" si moins de 13 ans
// "Matrix" si il a entre 13 et 18 ans
// "Evil Dead" si plus de 18ans
let agree = prompt('Quel est votre age ?');
if (agree < 13) {
    console.log('Action Man');
} else if (agree >= 13 && agree <= 18) {
    console.log('Matrix');
} else if (agree > 18) {
    console.log('Evil Dead');
}

// Écrire un algorithme qui renvoie le max de deux nombres x et y. Le résultat sera stocké dans une variable max.
let x = 23;
let y = 56;
let max;
if (x > y) {
    max = x;
} else {
    max = y;
}

console.log('le nombre le plus grand est ' + max);

// Écrire un algorithme qui stocke dans une variable max le maximum de trois variables a, b et c données.
let d = 23;
let e = 86;
let f = 56;
let maximum;

if (d > e) {
    maximum = d;
} else {
    maximum = e;
}

if (e > f) {
    maximum = e;
} else {
    maximum = f;
}
console.log('le nombre le plus grand est ' + maximum);

// Écrire la table de multiplication de 9
let val = 9;
for (let i = 0; i <= val; i++) {
    console.log(i + ' x ' + val + ' = ' + val * i);
}

// Écrire un algorithme qui demande un nombre entier non nul de départ, et qui calcule la somme des entiers jusqu’à ce nombre. Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15.
let resultat = 0;
for (let i = 0; i <= 5; i++) {
    resultat += i;
}
console.log(resultat);

// Ecrire un algorithme qui demande à l'utilisateur un nombre compris entre 0 et 10 jusqu'à ce que la réponse 7 soit donnée.
let number = prompt('Donnez-moi un nombre compris entre 0 et 10?');
while (number != 7) {
    number = prompt('Donnez-moi un nombre compris entre 0 et 10?');
}
console.log('Bien joué le chiffre était 7!');

// Ecrire un algorithme qui fait deviner un chiffre à l'utilisateur en lui indiquant si il est au dessus ou au dessous de 5
let goodNumber = prompt('Donnez-moi un nombre compris entre 0 et 10?');
while (goodNumber != 5) {
    if (goodNumber < 5) {
        goodNumber = prompt('Presque, un peu plus !');
    } else if (goodNumber > 5) {
        goodNumber = prompt('Presque un peu moins !');
    }
}
console.log('Bien joué le chiffre était 5!');

// Écrire une fonction qui calcule la perimètre d'un carré et l'afficher
function surface(x) {
    return x * 4;
}

let air = surface(3);
console.log("L'air du rectangle est de " + air + ' m2');

// Algorithme qui calcule et affiche le carre d'un nombre
function cube(x) {
    return x * x;
}

let carre = cube(3);
console.log("L'air du rectangle est de " + carre + ' m2');

/* 
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an. 
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech. 
*/
let popMarrakech = 1000000;
let popAgadir = 500000;
let years = 0;
while (popMarrakech > popAgadir) {
    years++;
    popMarrakech += 50000;
    popAgadir += (popAgadir * 8) / 100;
}

console.log('Dans ' + years + ' ans la population de Agadir dépassera celle de Marrakech');

// Ecrire un algorithme qui calcule la somme des valeurs d'un tableau (boucle for()).
let notes = [10, 15, 20, 15, 14, 8];
let response = 0;
for (let i = 0; i < notes.length; i++) {
    response = response + notes[i];
}
console.log(response);
