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
// CON IL FOR
/* for (let index = 0; index < pets.length; index++) {
  const pet = pets[index];
  console.log(pet);
} */

// CON FUNZIONE GENERICA ARROW FUCTION
/* const animali = (array) => {
  array.forEach((animale) => {
    console.log(animale);
  });
}; */
// CON LA FUNZIONE
function animali(array) {
  array.forEach((animale) => {
    console.log(animale);
  });
}

animali(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const cacca = pets.sort();
console.log(cacca);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const reverse = cacca.reverse();
console.log(reverse);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/* const animali2 = pets.shift();
console.log(animali2);
pets.push(animali2);
console.log(pets); */
const animali2 = pets.slice(0, 1);
console.log(animali2);
pets.push(animali2[0]);
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
cars.forEach((element,index) => {// secondo parametro sarà sempre l'indice
  element.licensePalte = 'shsksmi3'${index}'686nkj';//aggiungendo ${index} è come se indiciziamo o creimo un indice e quindi possiamo lavorarci sopra e aggiungere altri elementi 
});
/* for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  element.licensePlate = "543ndij";
}
 */
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newCar = {
  brand: "Volk",
  model: "Pavbc",
  color: "green",
  trims: ["gatto", "cane"],
};
cars.push(newCar);
console.log(cars);
// togliere l'ultimo elemento di trims di ogni auto

cars.forEach((element) => {
  delete element.trims.pop();
});
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
cars.forEach((element) => {
  const gatto = element.trims[0];
  console.log(gatto);
  justTrims.push(gatto);
});
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  if (element.color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/ const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let index = 0;

while (index < numericArray.length) {
  const element = numericArray[index];
  if (element === 32) {
    break;
  }
  console.log(element);
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
