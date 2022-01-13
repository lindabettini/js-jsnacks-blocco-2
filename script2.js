/*
todo - Inserisci un numero, se è pari stampa il numero,
todo - se è dispari stampa il numero successivo.
*/


const askNumb = parseInt(prompt('Inserisci un numero'));

let nuovoNumb = 0;

if (askNumb % 2){
    nuovoNumb = askNumb + 1;
    console.log(nuovoNumb);
} else {
    console.log(askNumb);
}


/*
// ° VERSIONE DO WHILE

let askNumb = parseInt(prompt('Inserisci un numero'));

while (askNumb % 2) {
    askNumb += 1;
} 

console.log(askNumb)
*/