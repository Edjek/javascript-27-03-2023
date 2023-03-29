// creer une fonction
// affiche 'Bonjour je m'appelle Rachid EDJEKOUANE
//execute

// creer une fonction qui prends 2 parametre
// affiche 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)
//execute

// creer une fonction qui prends 2 parametre
// retourne 'Bonjour je m'appelle (Rachid) (EDJEKOUANE)

// afficher dans un console

// ET afficher document.write()

// function helloUser() {
//   console.log("Bonjour, je m'appelle Rachid EDJEKOUANE");
// }

// helloUser()

// function helloUserWithParameterInConsole(firstName, lastName) {
//     console.log(`Bonjour, je m'appelle ${firstName} ${lastName} `);
// }

// helloUserWithParameterInConsole('Benoit', 'Assam');

function helloUserWithParameter(firstName, lastName) {
    return `Bonjour, je m'appelle ${firstName} ${lastName} `;
}

let firstName = 'rachid'
let lastName = 'edjekouane'

let message =  helloUserWithParameter(firstName, lastName)

console.log(message);

document.write(helloUserWithParameter(firstName, lastName))







