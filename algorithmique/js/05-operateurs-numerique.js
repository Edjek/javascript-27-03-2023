/* --------------------------- OPERATEURS ARITHMETIQUE --------------------------- */

// +, -, /, *, %, **

let resultat = 10 + 5; //Addition
console.log(`le resultat est ${resultat}`); //15

resultat = 10 - 5; //Soustraction
console.log(`le resultat est ${resultat}`); //5

resultat = 10 * 5; //Multiplication
console.log(`le resultat est ${resultat}`); //50

resultat = 10 / 5; //Division
console.log(`le resultat est ${resultat}`); //2

resultat = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log(`le resultat est ${resultat}`); //1

resultat = 10 ** 3; //Puissance
console.log(`le resultat est ${resultat}`); //100

let number = prompt('Donnez-moi un nombre ?');
let number2 = prompt('Donnez-moi un deuxieme nombre ?');
let result = number * number2;
console.log(`le resultat de la multiplication est ${result}`);
