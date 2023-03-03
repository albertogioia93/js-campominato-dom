'use strict';

function creareCella(element, className, htmlValore){
   const cellaCreata = document.createElement(element);
   cellaCreata.classList.add(className);
   cellaCreata.innerText = htmlValore;

   cellaCreata.addEventListener('click', function() {
       cellaCreata.style.backgroundColor = "blue";
       console.log(htmlValore);
   });

   return cellaCreata;
}

function elementoAppeso(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

const bottoneClick = document.querySelector('button');

bottoneClick.addEventListener('click', function() {
    
    const contenitore = document.querySelector('.container');

    for(let i = 1; i <= 100; i++){
        const elementoCreato = creareCella('div', 'cella', i);
        elementoAppeso(contenitore, elementoCreato);
    }   
});

// PER NON RIPETERE PIù IL CONTENITORE DI CELLE SOTTO IL FOOTER AL RICLICK DEL BOTTONE. DEVO SOLO CAPIRE DOVE INSERIRLO
// contenitore.innerHTML = '';


function ottieniRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    
}

console.log(ottieniRandom(1, 16));