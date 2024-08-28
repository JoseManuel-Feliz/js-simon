console.log('JS OK')

//*STEPS

/* 

//* 1. Recuperare gli elementi d'interesse all'interno del DOM.

//* 2. Creare un array che conterra i numeri da mostrare all'inizio del countdown.

//* 3. Creare un array che conterra il value degli input number.


//* 4. creare un evento al submit del form.
    ? 4b. impostare un intervallo di 1000 ms.
    ? 4c.  per ogni secondo che passa decrementare il nr del countdown.
    ? 4d.  creare una condizione che verifichi se il valore del countdown è uguale a zero.
        ! se è zero { rimuovere l'intervallo, svuotare il countdown, cambiare il testo a request message, 
        !            dare class block a gli input number e d-none ai nr iniziali } 
    
    ? 4e. Recuperare il value degli input text e inserirli nel array dei value input.
    ? 4f. creare una condizione che verifichi se il value degli input è incluso nel array dei nr casuali.
        ! stampare un messaggio appropiato in caso che siano presenti o meno.

*/


//* 1. Recuperare gli elementi d'interesse all'interno del DOM.

const simonCountDown = document.getElementById('count-down')
const requestMessage = document.getElementById('request-message')
const form = document.querySelector('form')
const guessNum = document.querySelectorAll('span')
const enterNum = document.querySelectorAll('input')
const playBtn = document.getElementById('play')

console.log(guessNum, enterNum[0])

//* 2. Creare un array che conterra i numeri da mostrare all'inizio del countdown.

let numbersToGuess = [5, 5, 5, 5, 5]
let i;
for (i = 0; i < guessNum.length; i++) {
    guessNum[i].innerText = numbersToGuess[i]
    console.log()
    console.log(guessNum[i].innerText)
}

