/* --------------------------- 12 - TABLEAUX --------------------------- */

// ? Un tableau (array) est un type de donnée qui peut contenir plusieurs éléments
// On peut créer un tableau en utilisant des crochets [] et en y insérant les éléments séparés par des virgules. 
let week = [
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    'dimanche',
];

console.log(week);

// Pour afficher un element du tableau je dois preciser quel indice du tableau je souhaite afficher
// ! Attention l'index d'un tableau commence à 0
console.log(week[0] + ' et ' + week[1]);


// De même pour modifier la valeur d'un tableau, je précise l'indice
week[1] = 'test';
week[1] = 'mardi';

console.log(week);

// Pour connaitre la longueur d'un tableau nous pouvons utiliser la propriété .length
console.log(week.length);

// declarer un tableau de fruits banane, pomme, fraise, kiwi
let fruits = ['banane', 'fraise', 'pomme', 'kiwi'];


// Pour itérer sur les valeurs d'un tableau nous pouvons utiliser la boucle for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Rendre parametrable une fonction acceptant un tableau en parametre et affichant chaque case du tableau
function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
displayArray(fruits);



// Les tableaux peuvent contenir des tableaux
// Ils multidimensionnels
let notes = [
    [12, 19, 10],
    [9, 6, 5],
    [19, 100, 19],

];
console.log(notes[0][1]);




// Transformer du texte en majuscule, minuscule
let message = 'je suis un bout de texte'


let messageUppercase = message.toUpperCase()
console.log(message.toUpperCase());

console.log(messageUppercase.toLowerCase());

// Declarer un tableau Paris, Berlin, Rome, Moscou, Londres, Madrid

// Creer une fonction
    // retire Madrid
    // ajouter au debut Vienne
    // Rome devient Alger
    //  afficher le tableau

const cities = ['Paris', 'Berlin', 'Rome', 'Moscou', 'Londres', 'Madrid']

function modifyCities(){
    cities.pop()
    cities.unshift('Vienne')
    cities[3] = 'Alger'
}


modifyCities()

console.log(cities);


// Exo : Créer une fonction permettant de :
    // Recuperer le nom, le prenom et l'age de l'utilisateur (demande)
    // Stocker ces informations dans un tableau
    //     -> Le nom doit être en MAJUSCULES
    //     -> Le prenom doit etre en MINUSCULES
    // creer un tableau vide (info)
    // Les infos vous les enregister dans le tableau
    // Afficher le tableau dans la console
    // return tableau

