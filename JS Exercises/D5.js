/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 1");
const pets = ["dog", "cat", "hamster", "redfish"];
// 1 creare una costante che stamperà  ogni elemento dell'array
// 2 ciclare l'Array così da avere tutta la lunghezza dell'Array, che mi servirà ad ottenere gli indici esatti
// 3 stampare gli indici e quindi ogni elemento dell'Arrey
// 4 richiamare la funzione
const printArray = function (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
  }
};

printArray(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3");
pets.reverse();
console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4");
let lastElement = pets[0];
pets.reverse();
pets.pop();
pets.reverse();
pets.push(lastElement);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO 5");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const licensePlate = ["AB1234BC", "AB567BC", "AB890BC"];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate[i];
}

console.log("Qui ho aggiunto le targhe alle cars:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");
const newCars = {
  brand: "Fiat",
  model: "Panda",
  color: "red",
  trims: ["indistruttibile", "bella", "audace"],
  licensePlate: "CD123EF",
};
cars.push(newCars);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/ console.log("ESERCIZIO 7");

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/ console.log("ESERCIZIO 8");
const fizzOrBuzz = function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].color[0] === "b") {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
};

fizzOrBuzz(cars);
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
const printUntil32 = function (array) {
  const indexOf32 = array.indexOf(32);
  let i = 0;
  while (i <= indexOf32) {
    console.log(array[i]);
    i++;
  }
};

printUntil32(numericArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10");

const charactersArray = ["g", "n", "u", "z", "d"];

const numbersOfLetters = function (array) {
  const numbersArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    switch (currentElement) {
      case "a":
        numbersArray.push(1);
        break;
      case "b":
        numbersArray.push(2);
        break;
      case "c":
        numbersArray.push(3);
        break;
      case "d":
        numbersArray.push(4);
        break;
      case "e":
        numbersArray.push(5);
        break;
      case "f":
        numbersArray.push(6);
        break;
      case "g":
        numbersArray.push(7);
        break;
      case "h":
        numbersArray.push(8);
        break;
      case "i":
        numbersArray.push(9);
        break;
      case "j":
        numbersArray.push(10);
        break;
      case "k":
        numbersArray.push(11);
        break;
      case "l":
        numbersArray.push(12);
        break;
      case "m":
        numbersArray.push(13);
        break;
      case "n":
        numbersArray.push(14);
        break;
      case "o":
        numbersArray.push(15);
        break;
      case "p":
        numbersArray.push(16);
        break;
      case "q":
        numbersArray.push(17);
        break;
      case "r":
        numbersArray.push(18);
        break;
      case "s":
        numbersArray.push(19);
        break;
      case "t":
        numbersArray.push(20);
        break;
      case "u":
        numbersArray.push(21);
        break;
      case "v":
        numbersArray.push(22);
        break;
      case "z":
        numbersArray.push(23);
        break;
      default:
        break;
    }
  }
  return numbersArray;
};

console.log(numbersOfLetters(charactersArray));
