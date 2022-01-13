/* 
todo - Crea un array di numeri interi
todo - e fai la somma di tutti gli elementi che sono in posizione dispari
*/

/* 
ç Decidiamo quanti numeri interi da collezionare.
ç Collezioniamo numeri interi in modo casuale.

ç Prendo un numero 
ç è dispari ? 
ç Se sì, sommalo
ç Altrimenti vai al prossimo 
*/


// // VERSIONE FOR

// const quantityOfNumbs = 10;
// const insieme = [];

// for ( let y = 0; y < quantityOfNumbs; y++){
//     let randomNumb = Math.floor(Math.random() * 101);
//     insieme.push(randomNumb);
//     /* 
//     < if (y % 2) {
//     <    sum += randomNumb;
//     <} 
//     ~ così potrei aver gia' finito tutto ma vediamo altre soluzioni */
// }

// console.log(insieme)

// /*
// let sum = 0;
// for (let y = 0; y < quantityOfNumbs; y++) {
//     if (y % 2) {
//         sum += insieme[y];
//     }
// }
// */

// /* 
// ° Punto FOR precedente ottimizzato: parto da y=1 così è gia dispari e conto di 2 alla volta per restare sui numeri dispari, così facendo mi risparmio un IF e inoltre 
// ! se avessi 10.000 numeri nell'insieme riduerrei drasticamente alla meta' il numero di cicli da fare !!! 
// */

// let sum = 0;
// for (let y = 1; y < quantityOfNumbs; y += 2) {
//     sum += insieme[y];
// }

// console.log(sum);



// // VERSIONE WHILE

const num = 10;
const insieme = [];
let sum = 0;

let y = 0;
while (y < num) {
    let randNum = Math.floor(Math.random() * 100) +1;
    insieme.push(randNum);
    y++;
    // ° Sommo gli elementi che sono in posizione dispari
    if (y % 2 != 0) {
    sum += randNum;
    }
}

