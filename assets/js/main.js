console.log("Ciao, il tuo js è ben collegato"); //Test js 

/*Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.*/

const number = 100;

console.log(number);

/*Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.*/

const PI = 3.14;

console.log(PI);

/*Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?*/
    /*Risposta: main.js:20 Uncaught TypeError: Assignment to constant variable.
    NON possiamo cambiare il valore di una variabile COSTANTE (const)
    Diverso il discorso con una variabile di tipo 'let' o 'var' (segue esempio con let PIgreco) */

//PI = 3.1416;

console.log(PI);

//Possiamo farlo con let

let PIgreco = 3.14;

console.log(PIgreco);

PIgreco = 3.1416;

console.log(PIgreco);
