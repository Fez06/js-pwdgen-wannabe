'use strict';

// const nomeVariabile = "Fez";
// console.log(nomeVariabile);

// const anniPersona = '11';
// console.log(nomeVariabile+anniPersona);

// const nomeUtente = 'mattia';


// console.log(nomeUtente);

// Chiedo il nome 

const firstName = prompt('Dimmi il tuo nome!');

// chiedo il cognome

const lastName = prompt('Ora il tuo cognome!');

// chiedo il colore preferito

const prefColor = prompt('Il tuo colore preferito?');

// elaboro la password e faccio un console log

const newPassword = `Ottimo utente ${firstName} ${lastName}, la tua nuova password e' ${firstName}${lastName}${prefColor}89`;

console.log(newPassword);

// mostro risultato su html 

document.querySelector('h2').innerHTML = newPassword;

