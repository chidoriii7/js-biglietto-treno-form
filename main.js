// -Chiedere all'utente il numero di Km da percorrere.
// const lunghezzaPercorso = parseInt(prompt('Inserisci la lunghezza del percorso in Km:'));
// -Chiedere L'età del passeggero.
// const etaPasseggero = parseInt(prompt('Inserisci età passeggero: '));
// -Calcolo prezzo totale del viaggio secondo le regole 

// -Prezzo base = (0.21 € al km)


//input
const pathingInput= document.getElementById('pathing');
const ageInput = document.getElementById('age');

//bottoni
const buttonReadText = document.getElementById('read-text');
const buttonReset = document.getElementById('reset-button');

//  const pathingInputValue = document.getElementById('pathing').value;
//  const ageInputValue = document.getElementById('age').value;

 
 buttonReadText.addEventListener('click' , function(){

    

    console.log(pathingInput.value , ageInput.value)
    
 }) 


 

// const prezzoBase = lunghezzaPercorso * 0.21;
// let sconto = 0;

// if(etaPasseggero < 18) {

//     sconto = prezzoBase * 0.2;
//     console.log('sconto del 20% applicato, il totale è:');

   
// }else if (etaPasseggero > 65) {
     
//     sconto = prezzoBase * 0.4;
//     console.log('sconto del 40% applicato, il totale è:');

// }else {

//     console.log('nessuno sconto applicato, il totale è:');
// 20
// }


// const buttonReadText = document.querySelector('.read-text')


// console.dir(buttonReadText)

// buttonReadText.addEventListener('click', function () {
    

// })

// const prezzoTotale = prezzoBase - sconto

// console.log (prezzoTotale.toFixed(2), '€')

