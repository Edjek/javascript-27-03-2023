/* --------------------------- 17 - FONCTIONS AVANCEES --------------------------- */

const fruits = ['pomme', 'banane', 'orange', 'kiwi'];

// forEach est une méthode JavaScript qui permet d'itérer sur les éléments d'un tableau
// et d'exécuter une fonction donnée pour chaque élément.
fruits.forEach(function (fruit) {
    console.log(fruit);
});

//  for...of  permet de parcourir les éléments d'un objet itérable (ex: tableau, string)
for (let fruit of fruits) {
    console.log(fruit);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

// for...in permet de parcourir les propriétés énumérables d'un objet
for (let key in person) {
    console.log(key + ': ' + person[key]);
}
