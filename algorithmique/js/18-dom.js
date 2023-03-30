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

// L'objet window possède plus de 150 propriétés et méthodes
// L'objet window est un objet important en JavaScript 
// car il fournit une interface entre le code JavaScript et la fenêtre du navigateur.
window.console.log;
console.log(window.innerHeight);
console.log(window.innerWidth);

const mainTitle = document.getElementById('main-title');
const title = document.getElementsByClassName('main-title');
const paragraphe = document.getElementById('paragraphe');

title[0].addEventListener('click', function () {
    title[0].innerHTML = ' coucou';
    paragraphe.innerHTML = 'surprise';
});
