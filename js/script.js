// Mail

// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////// Mail ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const mail = [
    'jon@gmail.com',
    'doe@gmail.com',
    'carol@gmail.com',
    'goku@gmail.com'
];

const verifyButton = document.getElementById('verify');

verifyButton.addEventListener('click', function () {
    const verifyMail = document.getElementById('email').value;
    let found = false;
    console.log(verifyMail);
    for (let i = 0; i < mail.length; i++) {
        let currentMail = mail[i];
        if (currentMail === verifyMail) {
            found = true
        } else {
        }
    }
    let text = document.getElementById('text');
    
    if (found) {
        text.innerText = 'Mail esistente';
        text.classList.add('bg-success');
        console.log(text)
    } else {
        text.innerText = 'Mail non presente';
        text.classList.add('bg-danger');
        console.log(text)
    }
});
