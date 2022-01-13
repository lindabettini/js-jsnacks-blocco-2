/*
todo - Inserisci un numero, se è pari stampa il numero,
todo - se è dispari stampa il numero successivo.
*/

const askNumb = parseInt(prompt('Inserisci un numero'));

let nuovoNumb = 0;

if (askNumb.value % 2){
    nuovoNumb = askNumb.value + 1;
    console.log(nuovoNumb);
} else {
    console.log(askNumb);
}


/*
// ° VERSIONE DO WHILE
do {
    askNumb += 1;
} while (askNumb % 2);

console.log(askNumb)
*/