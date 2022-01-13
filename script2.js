/*
todo - Inserisci un numero, se è pari stampa il numero,
todo - se è dispari stampa il numero successivo.
*/

const askNumb = parseInt(prompt('Inserisci un numero'));

if (askNumb % 2){
    console.log(askNumb+1);
} else {
    console.log(askNumb);
}