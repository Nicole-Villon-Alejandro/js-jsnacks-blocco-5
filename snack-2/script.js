const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//Uno

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}

//Dos
people.forEach((person) => console.log(person.name)); 

