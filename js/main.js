//! Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };

const secondBurger = hamburger;

secondBurger.name = "Double Cheese Burger";

secondBurger.weight = 500;

console.log(hamburger.name); // L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

console.log(secondBurger.name); // L'oggetto creato è solo 1 ed entrambi fanno riferimento ad hamburger con nome Cheese Burger, poi con la modifica di secondBurger il nome è diventato Double Cheese Burger per entrambi

/*Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?*/
