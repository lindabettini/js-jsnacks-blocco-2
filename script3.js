/*
todo - Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
todo - lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
*/

/*
// // VERSIONE FOR
const fakeInvites = [];
const firstNames = ['Linda', 'Laura', 'Adriana', 'Francesca', 'Sara', 'Luisa','Giuditta', 'Federica', 'Cristina'];
const lastNames = ['Bettini', 'Bigoni', 'Rossi', 'Verdi', 'Bonini', 'Giuliani', 'Nannini'];

for (let i = 0; i < 3 ; i++) {
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);

    const name = firstNames[randNum1];
    const lastname = lastNames[randNum2];

    const fakePerson = `${name} ${lastname}`;

    console.log('fake person:', fakePerson);

    fakeInvites.push(fakePerson);    
} 

console.table(fakeInvites);
*/


// // VERSIONE WHILE
const fakeInvites = [];
const firstNames = ['Linda', 'Laura', 'Adriana', 'Francesca', 'Sara', 'Luisa','Giuditta', 'Federica', 'Cristina'];
const lastNames = ['Bettini', 'Bigoni', 'Rossi', 'Verdi', 'Bonini', 'Giuliani', 'Nannini'];

while (fakeInvites.length < 3) {
    const randNum1 = Math.floor(Math.random() * firstNames.length);
    const randNum2 = Math.floor(Math.random() * lastNames.length);

    const name = firstNames[randNum1];
    const lastname = lastNames[randNum2];

    const fakePerson = `${name} ${lastname}`;

    console.log('fake person:', fakePerson);

    if (!fakeInvites.includes(fakePerson)) {
        fakeInvites.push(fakePerson);
    }
} 

console.table(fakeInvites);
