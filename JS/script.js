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

//? Fase di prerazione

//* 1. Recuperare gli elementi d'interesse all'interno del DOM.

const simonCountDown = document.getElementById('count-down')
const requestMessage = document.getElementById('request-message')
const replyMessage = document.getElementById('reply-message')
const form = document.querySelector('form')
const guessNum = document.querySelectorAll('span')
const enterNum = document.querySelectorAll('input')
const checkBtn = document.getElementById('check')
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

//* 3. Creare un array che conterra il value degli input number.
let numEntered = []

simonCountDown.innerText = 'Simon Says'
//? Fase gestione degli eventi

//* 4. creare un evento al submit del form.

form.addEventListener('submit', function (event) {
    event.preventDefault();
    for (let i = 0; i < enterNum.length; i++) {
        numEntered.push(parseInt(enterNum[i].value))

    }
    console.log(numEntered)
    if (numEntered === numbersToGuess) {
        replyMessage.innerText = 'Hai indovinato tutti i numeri'
    }
    console.log(numEntered, numbersToGuess, replyMessage)
})

playBtn.addEventListener('click', function (event) {
    event.preventDefault();
    //nascondo il btn play
    playBtn.classList.add('d-none')
    //rimuovo le classi d-none sugli elementi che mi interessano
    requestMessage.classList.remove('d-none')

    let seconds = 5;
    requestMessage.innerText = 'Memorizza i numeri entro il tempo limite!'

    // 4b. impostare un intervallo di 1000 ms.
    const count = setInterval(() => {

        // 4c.  per ogni secondo che passa decrementare il nr del countdown.
        simonCountDown.innerHTML = --seconds
        // 4d.  creare una condizione che verifichi se il valore del countdown è uguale a zero.
        form.classList.remove('d-none')
        if (seconds === 0) {
            clearInterval(count)
            simonCountDown.innerText = '-';
            requestMessage.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"

            for (i = 0; i < guessNum.length; i++) {
                guessNum[i].classList.add('d-none')
                enterNum[i].classList.remove('d-none')
            }
        }
    }, 1000);


})