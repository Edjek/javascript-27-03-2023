/* --------------------------- FONCTIONS AVANCEES --------------------------- */

const animals = ['tigre', 'loup', 'chouette', 'ours'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[1]);
}

// forEach est une méthode JavaScript qui permet d'itérer sur les éléments d'un tableau
// et d'exécuter une fonction donnée pour chaque élément.
animals.forEach((animal) => console.log(animal));

//  for...of  permet de parcourir les éléments d'un objet itérable (ex: tableau, string)
for(let animal of animals){
    console.log(animal);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
};

// for...in permet de parcourir les propriétés énumérables d'un objet
for(let key in person){
    console.log(`${key} : ${person[key]}`);
}
