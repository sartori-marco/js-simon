// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// genero i 5 numeri random in un alert
var numeri = [numeriRandom(1,100),numeriRandom(1,100), numeriRandom(1,100), numeriRandom(1,100), numeriRandom(1,100)];

alert(numeri);

console.log(numeri);

// timer
 setTimeout(gioco, 3000);


// funzione numeri random
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione gioco indovina numeri
function gioco(){
  // aggiungo un array che si popolerà se faccio giusti i numeri
  var numeriEsatti = [];


  // faccio inserire all'utente un numero alla volta per 5 volte
  for (var i = 0; i < 5; i++) {
    var giocatore = parseInt(prompt('Inserisci un numero da 1 a 100 compreso'));

    // faccio un controllo per verificare che i numeri inseriti siano validi
    while ( (giocatore < 0) || (giocatore > 100) ){
      alert('Numero non valido');
      // richiedo il numero
      giocatore = parseInt(prompt('Inserisci un numero da 1 a 100 compreso'));
    }
    //controllo e pusho i numeri esatti nell'array [numeriEsatti]
    if  (numeri.includes(giocatore))  {
      numeriEsatti.push(giocatore);

      var numeriGiusti = numeriEsatti.length;

    }

  }
  // guardo quali sono i numeri esatti
  console.log(numeriEsatti);
  // guardo quanti sono i numeri esatti
  console.log(numeriGiusti);

}








//
