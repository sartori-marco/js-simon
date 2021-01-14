// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// genero i 5 numeri random in un alert
var numeri = [numeriRandom(1, 100),numeriRandom(1, 100), numeriRandom(1, 100), numeriRandom(1, 100), numeriRandom(1, 100)];

alert(numeri);

console.log(numeri);


// funzione numeri random
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min) ) + min;
}
