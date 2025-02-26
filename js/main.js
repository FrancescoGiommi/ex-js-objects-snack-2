//! Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };

// const secondBurger = hamburger;

// secondBurger.name = "Double Cheese Burger";

// secondBurger.weight = 500;

// console.log(hamburger.name);  //! L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

// console.log(secondBurger.name);  //! L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

//! Code Question 2

// const hamburger = {
//   name: "Cheese Burger",

//   weight: 250,

//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };

// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]);  //! Essendo come gli oggetti, entrambi fanno riferimento ad hamburgher.ingredients quindi, con la modifica di secondBurger in salad, ora per entrambi il primo ingrediente è Salad

// console.log(secondBurger.ingredients[0]);  //! Essendo come gli oggetti, entrambi fanno riferimento ad hamburgher.ingredients quindi, con la modifica di secondBurger in salad, ora per entrambi il primo ingrediente è Salad

/* P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

    Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? */

//!  Code Question 3

// const hamburger = {
//   name: "Cheese Burger",

//   weight: 250,

//   maker: {
//     name: "Anonymous Chef",

//     restaurant: {
//       name: "Hyur's Burgers",

//       address: "Main Street, 123",

//       isOpen: true,
//     },

//     age: 29,
//   },
// };

// const secondBurger = structuredClone(hamburger);

// const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

//! In questo caso sono stati creati 3 oggetti perchè è stato utilizzato structuredClone che permette di clonare gli oggetti e di modificare gli oggetti annidati

//! Code Question 4

// const chef = {
//   name: "Chef Hyur",

//   age: 29,

//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",

//   address: {
//     street: "Main Street",

//     number: 123,
//   },

//   openingDate: new Date(2025, 3, 11),

//   isOpen: false,
// };

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//! Il metodo migliore è lo spread perchè possiamo creare una copia solo superficiale e permette di copiare anche le funzioni

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//! Per copiare restaurant il metodo migliore è structuredClone perchè permette di creare cloni di oggetti e oggetti annidati

//! Code Question 5 (Bonus)

// const hamburger = {
//   name: "Cheese Burger",

//   weight: 250,

//   maker: {
//     name: "Anonymous Chef",

//     restaurant: {
//       name: "Hyur's Burgers",

//       address: "Main Street, 123",

//       isOpen: true,
//     },

//     age: 29,
//   },
// };

// const newRestaurant = { ...hamburger.maker.restaurant };

// newRestaurant.name = "Hyur's II";

// newRestaurant.address = "Second Street, 12";

// const secondBurger = { ...hamburger };

// secondBurger.maker.restaurant = newRestaurant;

// secondBurger.maker.name = "Chef Hyur";

//console.log(hamburger.maker.name); Qua viene stampato "Chef Hyur" perchè è stato modificato il nome da secondBurger senza copiare maker

//console.log(secondBurger.maker.name);  Qua viene stampato "Chef Hyur" perchè viene modificato il nome da secondBurger

//console.log(hamburger.maker.restaurant.name);  Qua viene stampato "Hyur's II" perchè è stato modificato il valore di name da newRestaurant senza farne la copia

//console.log(secondBurger.maker.restaurant.name); Qua viene stampato "Hyur's II" perchè è stato sovrascritto newRestaurant come restaurant di secondBurger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

//! Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",

  age: 29,

  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },

  restaurant: {
    name: "Hyur's Burgers",

    welcomeClient: () => {
      console.log("Benvenuto!");
    },

    address: {
      street: "Main Street",

      number: 123,

      showAddress: () => {
        console.log("Main Street 123");
      },
    },

    isOpen: true,
  },
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//! Il modo migliore è utilizzare lo spread perchè permette di copiare le funzioni
