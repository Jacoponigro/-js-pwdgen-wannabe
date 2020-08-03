// chiedo nome
var nome = prompt("qual è il tuo nome ?");
// chiedo cognome
var cognome = prompt("qual è il tuo cognome ?");
// chiedo colore preferito
var colore = prompt("qual è il tuo colore preferito ?");
// variabile totale
var risultato = nome + cognome + colore;
// stampa
document.getElementById('info').innerHTML = risultato + "19";
