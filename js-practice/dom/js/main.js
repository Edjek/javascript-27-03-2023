/*
/*  ---------------------------------------------
    Découverte de la manipulation du DOM
    ---------------------------------------------
    En JavaScript, il existe plusieurs propriétés 
    pour accéder et modifier les éléments HTML sélectionnés dans le DOM. 
    Voici quelques-unes des propriétés les plus couramment utilisées :

*/

// -------------------------- Selecteurs --------------------------

const title = document.querySelector('h1')
const paragraphes = document.querySelectorAll('p')


// -------------------------- Propriétés --------------------------

title.style.color = '#844'
title.innerHTML = 'Le javascript en pratique <em>modifié par le js</em>'


// -------------------------- Attributs --------------------------

title.setAttribute('title', 'Je suis un title')
console.log(title.getAttribute('title'));
title.removeAttribute('title')
// title.setAttribute('class', 'title-css')


// -------------------------- Class --------------------------

title.classList.add('toto', 'tutu')
title.classList.remove('toto')
title.classList.toggle('super-titre')

// Retourne true si l'element possède la classe
// Sinon false
console.log(title.classList.contains('tutu'));

// En plus de `SetAttribut()` on peut manipuler certains attributs 
// Avec des propriétés et des méthodes spécifiques
const image = document.querySelector('img')
image.src = 'coucou'

const link = document.querySelector('a')
link.href = ''

const input = document.querySelector('input')
input.value = 'trere'


// -------------------------- Creation d'element --------------------------

const container = document.querySelector('#container')
const span = document.createElement('span')
span.textContent = 'coucou, je suis une span crée par mon utilisateur'
span.classList.add('txt-red')
// Ajoute l'élément à la fin
container.append(span)
// Ajoute l'élément au début
container.prepend(span)
// Supprime l'élément
span.remove()

const p = container.querySelector('p')

console.log(p.parentElement);

container.addEventListener('click', function (e) {
    e.target.style.backgroundColor = 'pink'
})