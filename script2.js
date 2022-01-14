/*
todo - Inserisci un numero, se è pari stampa il numero,
todo - se è dispari stampa il numero successivo.
*/

/*
let askNumb = parseInt(prompt('Inserisci un numero'));

if (askNumb % 2){    
    console.log(++askNumb);
} else {
    console.log(askNumb);
}
*/

/*
// ° VERSIONE WHILE

let askNumb = parseInt(prompt('Inserisci un numero'));

while (askNumb % 2) {
    askNumb += 1;
} 

console.log(askNumb)
*/

// // VERSIONE DO WHILE

let askNumb; 

do {
    askNumb = parseInt(prompt('Inserisci un numero'));
} while (isNaN(askNumb) || askNumb < 0);


if (askNumb % 2 === 0) {
    console.log(askNumb);
} else {
    console.log(++askNumb);
}