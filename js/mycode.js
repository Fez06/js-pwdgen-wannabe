'use strict';

// Chiedo il nome e lo salvo

const firstName = prompt('Dimmi il tuo nome!');

// chiedo il cognomee lo salvo

const lastName = prompt('Ora il tuo cognome!');

// chiedo il colore preferito e lo salvo

const prefColor = prompt('Il tuo colore preferito?');

// elaboro la password e faccio un console log

const newPassword = `Ottimo utente ${firstName} ${lastName}, la tua nuova password e' ${firstName}${lastName}${prefColor}89 !!!`;

console.log(newPassword);

// mostro risultato su html 

document.querySelector('h2').innerHTML = newPassword;

