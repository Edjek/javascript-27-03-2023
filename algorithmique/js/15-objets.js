/* --------------------------- Objets --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.

const person = {
    firstName: 'rachid',
    lastName: 'edjekouane',
    notes: [10, 12, 19, 20],
    getFirstName: function () {
        return this.firstName;
    },
    brother: {
        firstName: 'malik',
        lastName: 'edjekouane',
    },
};
let name = 'firstName'
console.log(person[name]);

const sangoku = {
    firstName: 'san',
    lastName: 'goku',
    children:['gohan', 'goten'],
    age : 39,
    presentation: function(){
        return `Bonjour je m'appelle ${this.firstName} 
        ${this.lastName} et jai ${this.children.length} enfant'+ 'ils s'appellent ${this.children[0]} ${this.children[1].toUpperCase()}`
    }
};

// console.log(`${sangoku.firstName}  ${sangoku.presentation()}`);

// console.log(person.getFirstName());

// console.log(person.brother.firstName);
// person.notes.push(123)
// console.log(person.notes);

// person.sport = 'climbing'
// console.log(person);

/* 
Creer un objet sangoku
    nom => san
    prenom => goku
    enfant => array (gohan et goten)
    age => 
    presention =>() (
        retourne ' bonjour je m'appelle San Goku et jai x enfant
    )

    clg 'bonjour je m'appelle San Goku et jai x enfant'+ 'ils s'appellent


*/
