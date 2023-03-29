/* --------------------------- FONCTIONS PREDEFINIES - TABLEAUX --------------------------- */
// ! Attention la plupart des methodes modifient le tableau de départ

let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];

// Ajouter un ou plusieurs éléments à la fin du tableau
fruits.push('orange', 'cerise');
// Supprimer le dernier élément du tableau
fruits.pop();

// Ajouter un ou plusieurs éléments au début du tableau
fruits.unshift('abricot');
// Supprimer le premier élément du tableau
fruits.shift();

// Renvoie une copie d'une partie du tableau
// Premier paramètre l'indice de départ
// Deuxième paramètre l'indice de fin exclu
console.log(fruits.slice(1, 3));

// Modifier ou Ajouter  ou Supprimer un element dans le tableau

// Ajouter
fruits.splice(1, 0, 'Mangue');
//Modifier
fruits.splice(2, 1, 'Melon');
// Supprimer
fruits.splice(2, 1);

// On peut concaténer deux tableaux (retourne un nouveau tableaux)
const array = fruits.concat(week);
