/* 
todo - Crea due array che hanno un numero di elementi diversi.
todo - Aggiungi elementi casuali all’array che ha meno elementi,
todo - fino a quando ne avrà tanti quanti l’altro.
*/

const insieme1 = [10, 20, 30, 40, 50, 60, 70, 80];
const insieme2= [15, 25, 35, 45, 55];
console.log(insieme1);
console.log(insieme2)

while (insieme2.length < insieme1.length){
    let addNumb = Math.floor(Math.random() * 100) +1;
    insieme2.push(addNumb);
}
console.log(insieme2);