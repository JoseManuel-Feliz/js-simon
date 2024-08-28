console.log('JS OK');

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

const simonCountDown = document.getElementById('count-down');
const requestMessage = document.getElementById('request-message');
const replyMessage = document.getElementById('reply-message');
const form = document.querySelector('form');
const hiddenWrapper = document.getElementById('hidden-wrapper')
const guessNum = document.querySelectorAll('span');
const enterNum = document.querySelectorAll('input');
const checkBtn = document.getElementById('check');
const playBtn = document.getElementById('play');

simonCountDown.innerText = 'Simon Says';

console.log(guessNum, enterNum[0]);
//* 2. Creare un array che conterra i numeri da mostrare all'inizio del countdown.

let numbersToGuess = [1, 2, 3, 4, 5];

for (let i = 0; i < guessNum.length; i++) {
    guessNum[i].innerText = numbersToGuess[i]
    console.log(guessNum[i].innerText)
}


//? Fase gestione degli eventi

//* 4. creare un evento al submit del form.

form.addEventListener('submit', function (event) {
    replyMessage.classList.remove('text-success', 'text-warning')


    //* 3. Creare un array che conterra il value degli input number.
    let numEntered = [];


    // 4e. Recuperare il value degli input text e inserirli nel array dei value input.
    event.preventDefault();
    for (let i = 0; i < enterNum.length; i++) {
        const value = parseInt(enterNum[i].value)
        if (!numEntered.includes(value)) {
            numEntered.push(value)

        }
    }
    console.log(numEntered)


    // 4f. creare una condizione che verifichi se il value degli input è incluso nel array dei nr casuali.
    const guessed = []
    for (let i = 0; i < numbersToGuess.length; i++) {
        if (numbersToGuess.includes(numEntered[i])) {
            guessed.push(numEntered[i]);
        }

    }
    console.log(guessed)


    if (guessed.length === numbersToGuess.length) {
        replyMessage.classList.add('text-success');
        replyMessage.innerText = `Bravə, hai indovinato tutti i ${guessed.length} numeri! (${guessed})`
    } else {
        replyMessage.classList.add('text-warning');
        replyMessage.innerText = `Hai indovinato soltanto ${guessed.length} numeri! (${guessed}) ritenta di nuovo`
    }


    console.table(numEntered, numbersToGuess, replyMessage)
})

playBtn.addEventListener('click', function (event) {
    event.preventDefault();
    //nascondo il btn play
    playBtn.classList.add('d-none')
    //rimuovo le classi d-none sugli elementi che mi interessano
    requestMessage.classList.remove('d-none')

    let seconds = 10;
    simonCountDown.innerText = seconds
    requestMessage.innerText = 'Memorizza i numeri entro il tempo limite!'
    replyMessage.innerText = ''
    checkBtn.classList.add('d-none')


    for (i = 0; i < guessNum.length; i++) {
        enterNum[i].value = ''
        guessNum[i].classList.remove('d-none')
        enterNum[i].classList.add('d-none')
    }


    hiddenWrapper.classList.remove('d-none')
    // 4b. impostare un intervallo di 1000 ms.
    const count = setInterval(() => {

        // 4c.  per ogni secondo che passa decrementare il nr del countdown.
        simonCountDown.innerHTML = --seconds
        // 4d.  creare una condizione che verifichi se il valore del countdown è uguale a zero.
        if (seconds === 0) {
            clearInterval(count)
            simonCountDown.innerText = '-';
            requestMessage.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"
            checkBtn.classList.remove('d-none')

            for (i = 0; i < guessNum.length; i++) {
                guessNum[i].classList.add('d-none')
                enterNum[i].classList.remove('d-none')
            }

        }
    }, 1000);

    const tryAgain = setTimeout(() => {
        playBtn.classList.remove('d-none')
        playBtn.innerText = 'Try again'
        playBtn.classList.add('btn-secondary')

    }, seconds * 2 * 1000);

})