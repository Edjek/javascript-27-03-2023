/* --------------------------- 15 - OBJETS --------------------------- */

// Les objets sont des structures de données complexes qui permettent de stocker des valeurs et des fonctions ensemble.
let personn = {
    name: 'rachid',
    setName: function (name) {
        this.name = name;
        console.log(this);
    },
};
personn.setName('toto');

console.log(personn.name);
console.log(personn['name']);
