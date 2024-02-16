console.log("Ciao, il tuo js è ben collegato"); //Test js 

/*Esercizio 1
Dichiara una variabile chiamata number e assegnale il valore 100. Stampa il valore della variabile in console.*/

const number = 100; //number

console.log(number);



/*Esercizio 2
Dichiara una costante chiamata PI e assegnale il valore di 3.14. Stampa il valore della costante in console.*/

const PI = 3.14; //number

console.log(PI);

/*Esercizio 2/B
Prova ad assegnare alla costante chiamata PI il valore di 3.1416. Sai dire cosa succede?*/

/*Risposta: main.js:20 Uncaught TypeError: Assignment to constant variable.
NON possiamo cambiare il valore di una variabile COSTANTE (const)
Diverso il discorso con una variabile di tipo 'let' o 'var' (segue esempio con let PIgreco) */

//PI = 3.1416; (contenuto commentato per andare avanti)

//console.log(PI); (contenuto commentato per andare avanti)

//Possiamo farlo con let

let PIgreco = 3.14; //number

console.log(PIgreco);

PIgreco = 3.1416; //number

console.log(PIgreco);

/*Esercizio 2/C
Dichiara una variabile chiamata radius e assegnale il valore 8.
Moltiplica radius x 2 e x PI e assegna il valore a una variabile di nome circle.
Stampa il valore della variabile circle in console.*/

const radius = 8; //number

const circle = radius * 2 * PI; //number

console.log(circle);



/*Esercizio 3
Dichiara una variabile chiamata name e
assegnale il valore "Carlo".
Successivamente, modifica il valore della variabile in "Marco".
Stampa il nuovo valore in console.*/

let name = "Marco"; //string

console.log(name);

name = "Carlo"; //string

console.log(name);




/*Esercizio 4
Dichiara una variabile chiamata temperature e assegnale 
il valore 22.5. Successivamente, aumenta il suo valore di 
5 e stampa il nuovo valore in console.*/

let temperature = 22.5;

temperature = temperature + 5

console.log(temperature);



/*Esercizio 5: Numeri
Rispondete in un commento a più righe: Che differenza c'è tra 
il numero 3.14 e 100 sono diversi? Perchè? Che tipo di dato è 
uno e che tipo di dato è l'altro?*/

/* 3.14 è un numero decimale in quanto presenta valori aggiuntivi
 a 0 e 1. In questo sisitema possiamo utilizzare numeri da 0 a 9

100 è un numero binario, potrebbe trarci in inganno perché è (anche)
un numero decimale, in informatica questo 100 potrebbe essere parte di
una sequenza di bit*/


/*Esercizio 6: console
Per scrivere dentro la nostra console utilizziamo la sua
 funzione .log() ma se scrivessimo
  console.info('Il mio messaggio') che differenza c'è?
   Perche? Esistono altri metodi da usare con console. ?
(aiutatevi con una ricerca su internet per tennere allenate il vostro brain)*/