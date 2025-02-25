//! Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };

// const secondBurger = hamburger;

// secondBurger.name = "Double Cheese Burger";

// secondBurger.weight = 500;

// console.log(hamburger.name);  L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

// console.log(secondBurger.name);  L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/

//! Code Question 2

const hamburger = {
  name: "Cheese Burger",

  weight: 250,

  ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
};

const secondBurger = { ...hamburger };

secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Essendo come gli oggetti, entrambi fanno riferimento ad hamburgher.ingredients quindi, con la modifica di secondBurger in salad, ora per entrambi il primo ingrediente è Salad

console.log(secondBurger.ingredients[0]); // Essendo come gli oggetti, entrambi fanno riferimento ad hamburgher.ingredients quindi, con la modifica di secondBurger in salad, ora per entrambi il primo ingrediente è Salad

/* P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

    Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? */
