console.log('ok')
/* 
todo - Il software deve chiedere per 5 volte all’utente di inserire un numero.
todo - Il programma stampa la somma di tutti i numeri inseriti.
todo - Esegui questo programma in due versioni, con il for e con il while. 
*/



// ° VERSIONE FOR
/*
let sum = 0;

for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt('Inserisci un numero'));
    if (!isNaN(num)) {
        sum += num;
        console.log(sum)
    }
}
*/

// ° VERSIONE WHILE

let sum = 0;

let i = 1; 
while (i < 5) {
    const num = parseInt(prompt('inserisci un numero (${i})'));
    if (!isNaN(num)) {
        sum += num;
    }

    i++;
    console.log(num)
    console.log(sum)
} 







