/* --------------------------- Manipulation du DOM --------------------------- */

/*
    Le DOM (Document Object Model) en JavaScript 
    est une représentation en mémoire d'un document HTML chargé dans un navigateur.
    Le DOM représente chaque élément du document comme un objet JavaScript 
    qui peut être manipulé et modifié à travers le code JavaScript.
*/

/*
    L'objet window en JavaScript est un objet global qui représente la fenêtre du navigateur.
    Cet objet est créé automatiquement lorsque la page Web est chargée
*/

console.log(window);

/*
    L'objet window possède plus de 150 propriétés et méthodes
    L'objet window est un objet important en JavaScript
    car il fournit une interface entre le code JavaScript et la fenêtre du navigateur.
*/

/*  -------------------------------------------
    Plusieurs methodes de selecteurs JavaScript
    -------------------------------------------
*/

// La methode getElementById()
const elementById = document.getElementById('element-by-id');
elementById.style.color = 'red';

/*
    La methode getElementsByTagName()
    ? getElementsByClassName renvoi une HTMLCollection 
    sur laquelle on pourra itérer avec la boucle for()
*/
const paragraphe = document.getElementsByTagName('p');
for (let i = 0; i < paragraphe.length; i++) {
    paragraphe[i].style.color = 'blue';
}

/*
    La methode getElementsByClassName()
    ? getElementsByClassName renvoi une HTMLCollection
    sur laquelle on pourra itérer avec la boucle for()
*/
const elementByClass = document.getElementsByClassName('element-by-class');

for (let i = 0; i < elementByClass.length; i++) {
    elementByClass[i].style.color = 'orange';
}

// La methode querySelector
const querySelector = document.querySelector('p');
querySelector.style.color = 'green';

/*
    La methode querySelectorAll
    ? querySelectorAll renvoi une NodeList
    sur laquelle on pourra itérer avec la boucle for() ou la méthode forEach()
*/
const elementByClassWithQuerySelectorAll =
    document.querySelectorAll('.element-by-class');

// Boucle for()
for (let i = 0; i < elementByClassWithQuerySelectorAll.length; i++) {
    elementByClassWithQuerySelectorAll[i].style.color = 'khaki';
}

// Boucle forEach
elementByClassWithQuerySelectorAll.forEach(
    (toto) => (toto.style.fontWeight = 'bold')
);

/*  ---------------------------------------------
    Quelques proprietes liées aux éléments du DOM
    ---------------------------------------------
*/
const subTitle = document.querySelector('#subtitle');

// La propriété `style` permet de modifier le style
subTitle.style.color = 'pink';

// La propriété `extContent`  permet de récupérer ou de définir le contenu textuel d'un élément HTML.
subTitle.textContent = 'Je suis un titre modifié en javascript';

/*
    La méthode addEventListener() permet de définir un écouteur d'événement sur un élément HTML.
    Cet écouteur est appelé chaque fois que l'événement spécifié se produit sur l'élément.
*/

// subTitle.addEventListener('click', function () {
//     if (subTitle.style.color == 'pink') {
//         subTitle.style.color = 'red';
//     } else {
//         subTitle.style.color = 'pink';
//     }
// });

// subTitle.addEventListener('click', function () {
//     if(!subTitle.classList.contains('active')){
//         subTitle.classList.add('active')
//     } else {
//         subTitle.classList.remove('active')
//     }
// });

subTitle.addEventListener('click', function () {
    subTitle.classList.toggle('active');
});
