/* --------------------------- 13 - FONCTIONS PREDEFINIES POUR LES TABLEAUX  --------------------------- */

// Ajouter un ou plusieurs éléments à la fin du tableau 
fruits.push('orange', 'cerise')
console.log(fruits);

// Supprimer le dernier élément du tableau
fruits.pop()
console.log(fruits);

// Ajouter un ou plusieurs éléments au début du tableau
fruits.unshift('abricot')

// Supprimer le premier élément du tableau
fruits.shift()

// Renvoie une copie d'une partie du tableau
console.log(fruits.slice(1, 3));

// Retourner dans un nouveau tableaux les tableaux fusionnés 
const array = fruits.concat(week)

// Modifier ou ajouter un element dans le tableau
console.log(`mon tableau avant splice() ${fruits}`);
fruits.splice(1,0,'Mangue')
console.log(`mon tableau après splice() ${fruits}`);

fruits.splice(2, 1, 'Melon' )
console.log(fruits);

fruits.splice(2, 1)
console.log(fruits);