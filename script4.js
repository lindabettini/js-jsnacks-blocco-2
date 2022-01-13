/* 
todo - Crea un array di numeri interi
todo - e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/* 
// Decidiamo quanti numeri interi da collezionare.
// Collezioniamo numeri interi in modo casuale.

// Prendo un numero 
// è dispari ? 
// Se sì, sommalo
// Altrimenti vai al prossimo 
*/

// ç VERSIONE FOR

const quantityOfNumbs = 10;
const insieme = [];

for ( let y = 0; y < quantityOfNumbs; y++){
    let randomNumb = Math.floor(Math.random() * 101);
    insieme.push(randomNumb);
    /* 
    < if (y % 2) {
    <    sum += randomNumb;
    <} 
    ~ così potrei aver gia' finito tutto ma vediamo altre soluzioni */
}

console.log(insieme)

/*
let sum = 0;
for (let y = 0; y < quantityOfNumbs; y++) {
    if (y % 2) {
        sum += insieme[y];
    }
}
*/

/* 
° Punto FOR precedente ottimizzato: parto da y=1 così è gia dispari e conto di 2 alla volta per restare sui numeri dispari, così facendo mi risparmio un IF e inoltre 
! se avessi 10.000 numeri nell'insieme riduerrei drasticamente alla meta' il numero di cicli da fare !!! 
*/

let sum = 0;
for (let y = 1; y < quantityOfNumbs; y += 2) {
    sum += insieme[y];
}

console.log(sum);

// ç VERSIONE WHILE