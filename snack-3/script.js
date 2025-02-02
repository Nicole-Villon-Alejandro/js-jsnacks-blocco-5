const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// Creiamo un nuovo array incrementando ogni numero di 1
const incrementedNumbers = numbers.map(num => num + 1);

console.log(incrementedNumbers);


//Dos
const incremented = numbers.map((numero) => {
    return numero + 1;
}  )

console.log(incremented)
