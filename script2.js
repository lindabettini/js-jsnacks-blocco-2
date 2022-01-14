/*
todo - Inserisci un numero, se è pari stampa il numero,
todo - se è dispari stampa il numero successivo.
*/


let askNumb = parseInt(prompt('Inserisci un numero'));

if (askNumb % 2){    
    console.log(++askNumb);
} else {
    console.log(askNumb);
}


/*
// ° VERSIONE WHILE

let askNumb = parseInt(prompt('Inserisci un numero'));

while (askNumb % 2) {
    askNumb += 1;
} 

console.log(askNumb)
*/