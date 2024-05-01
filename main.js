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
    
    //dati 
    const price = 0.21
    const discountMinorenni = 0.2
    const discountOver65 = 0.4
    let finalDiscount = 0
    let finalPrice = price * pathingInput.value

    console.log(pathingInput.value , ageInput.value)

    if(ageInput.value < 18) {

    finalDiscount = price * pathingInput.value * discountMinorenni

    finalPrice = finalPrice - finalDiscount
    console.log('sconto del 20% applicato');
    
    

    } else if (ageInput.value > 65) {
        finalDiscount = price * pathingInput.value * discountOver65
        finalPrice = finalPrice - finalDiscount
        console.log('sconto del 40% applicato')

    } else {

        console.log('nessuno sconto applicato')

    }
    
     console.log('il totale è:', finalPrice.toFixed(2) ,'€')
     
 }) 



 buttonReset.addEventListener('click' , function(){

    pathingInput.value = ''
    ageInput.value = ''

    console.log('ho resettato il biglietto')
 })



