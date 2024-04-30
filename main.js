// -Chiedere all'utente il numero di Km da percorrere.
const lunghezzaPercorso = parseInt(prompt('Inserisci la lunghezza del percorso in Km:'));
// -Chiedere L'età del passeggero.
const etaPasseggero = parseInt(prompt('Inserisci età passeggero: '));
// -Calcolo prezzo totale del viaggio secondo le regole 

// -Prezzo base = (0.21 € al km)
const prezzoBase = lunghezzaPercorso * 0.21;
let sconto = 0;

//     -SE minorenne = sconto 20%
if(etaPasseggero < 18) {

    sconto = prezzoBase * 0.2;
    console.log('sconto del 20% applicato, il totale è:');

    //     -SE over 65 = sconto 40%
}else if (etaPasseggero > 65) {
     
    sconto = prezzoBase * 0.4;
    console.log('sconto del 40% applicato, il totale è:');

}else {

    console.log('nessuno sconto applicato, il totale è:');

}
//     -SE non rientra in queste due categorie prezzo base

const prezzoTotale = prezzoBase - sconto
// -Output del prezzo finale (max 2 decimali)
console.log (prezzoTotale.toFixed(2))
