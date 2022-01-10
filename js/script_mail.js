/*
# Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

# Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.

# BONUS
Stampare i risultati in pagina oltre che in console!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si, ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//# Mail common code

const emailList = ['marco98.deiu@gmail.com', 'mdeiulio@icloud.com', 'abbonati@ilpost.it', 'morning@ilpost.it'];
console.table(emailList);

const logIn = (prompt('Insert Email', 'mdeiulio@icloud.com').trim()).toLocaleLowerCase();
console.log(`Email inserted: ${logIn}`);

const printAuthorization = document.getElementById('access_granted');
const printDenial = document.getElementById('access_denied');

//# Mail '.includes()' version
//! Decomment one version only!

/* if (emailList.includes(logIn)) {
	console.log(`${logIn} is a valid Email address.`);
	console.log('Authorized Access.');
	printAuthorization.innerText = 'Authorized Access.';
} else {
	console.log('Access Denied.');
	console.log('Access Denied.');
	printDenial.innerText = 'Access Denied.';
} */

//# Mail 'for' version
//! Decomment one version only!

let validation;

for (i = 0; i < emailList.length; i++) {
	if (logIn === emailList[i]) {
		console.log(`${emailList[i]} is a valid Email address.`);
		validation = true;
	}
}
if (validation == true) {
	console.log('Authorized Access.');
	printAuthorization.innerText = 'Authorized Access.';
} else {
	console.log('Access Denied.')
	printDenial.innerText = 'Access Denied.';
}