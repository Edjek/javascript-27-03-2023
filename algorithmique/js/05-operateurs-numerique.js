/* --------------------------- OPERATEURS ARITHMETIQUE --------------------------- */

// +, -, /, *, %

let resultat = 10 + 5; //Addition
console.log(resultat); //15

resultat = 10 - 5; //Soustraction
console.log(resultat); //5

resultat = 10 * 5; //Multiplication
console.log(resultat); //50

resultat = 10 / 5; //Division
console.log(resultat); //2

resultat = 10 % 3; //Modulo (=reste division)
//10 billes à répartir entre 3 personnes => Reste 1
console.log(resultat); //1

let number = prompt('Donnez-moi un nombre ?');
let number2 = prompt('Donnez-moi un deuxieme nombre ?');
let result = number * number2;
console.log(result);
