// -Chiedere all'utente il numero di Km da percorrere.
// const lunghezzaPercorso = parseInt(prompt('Inserisci la lunghezza del percorso in Km:'));
// -Chiedere L'età del passeggero.
// const etaPasseggero = parseInt(prompt('Inserisci età passeggero: '));
// -Calcolo prezzo totale del viaggio secondo le regole 

// -Prezzo base = (0.21 € al km)


//input
const userInput = document.getElementById('user');
const pathingInput= document.getElementById('pathing');
const ageInput = document.getElementById('age');

//bottoni
const buttonReadText = document.getElementById('read-text');
const buttonReset = document.getElementById('reset-button');




//  const pathingInputValue = document.getElementById('pathing').value;
//  const ageInputValue = document.getElementById('age').value;


buttonReadText.addEventListener('click' , function(){


    //generazione biglietto (no classe hidden)
    const generazioneTicket = document.getElementById('generazione-biglietto');
    //risultato biglietto (classe hidden)
    const ticketResult = document.getElementById('ticket-result');
    
    //valori output
    let usernameOutput = document.getElementById('username-output').innerHTML;
    let discountOutput = document.getElementById('discount-output').innerHTML;

    let carrozzaOutput = document.getElementById('carrozza-output').innerHTML;
    //estrazione carrozza random
    let carrozzaRandom = Math.floor((Math.random() * 5) + 1);
    carrozzaOutput = `${carrozzaOutput} ${carrozzaRandom}`;
    document.getElementById('carrozza-output').innerHTML = carrozzaOutput




    let cpOutput = document.getElementById('cp-output').innerHTML;
    let priceOutput = document.getElementById('price-output').innerHTML;
     
    
    //username output
    usernameOutput = `${usernameOutput} ${userInput.value}`;
    document.getElementById('username-output').innerHTML = usernameOutput

    
    

    //dati 
    const price = 0.21;
    const discountMinorenni = 0.2;
    const discountOver65 = 0.4;
    let finalDiscount = 0;
    let finalPrice = price * pathingInput.value;

    

    console.log('Il passeggero si chiama:' , userInput.value);
    console.log('Km da percorrere:' , pathingInput.value);
    console.log('Età del passeggero:' , ageInput.value);

    //regole discount

    if(ageInput.value < 18) {

    finalDiscount = price * pathingInput.value * discountMinorenni;

    finalPrice = finalPrice - finalDiscount;
    
    //discount output minorenne
    discountOutput = `${discountOutput} ${'Offerta Minorenni'}`;
    document.getElementById('discount-output').innerHTML = discountOutput

    console.log('sconto del 20% applicato');
    
    

    } else if (ageInput.value > 65) {
        finalDiscount = price * pathingInput.value * discountOver65;
        finalPrice = finalPrice - finalDiscount;

    //discount output over65
    discountOutput = `${discountOutput} ${'Offerta over65'}`;
    document.getElementById('discount-output').innerHTML = discountOutput

        console.log('sconto del 40% applicato');

    } else {


    //discount output no discount
    discountOutput = `${discountOutput} ${'Biglietto Standard'}`;
    document.getElementById('discount-output').innerHTML = discountOutput

        console.log('nessuno sconto applicato');

    }
    //prezzo output
    priceOutput = `${priceOutput} ${finalPrice.toFixed(2)}€`;
    document.getElementById('price-output').innerHTML = priceOutput

     console.log('il totale è:', finalPrice.toFixed(2) ,'€');



     ticketResult.classList.remove('hidden');
     generazioneTicket.classList.add('hidden');

 }) 

 

 buttonReset.addEventListener('click' , function(){

    userInput.value = '';
    pathingInput.value = '';
    ageInput.value = '';


    console.log('ho resettato i dati del biglietto, inseriscili di nuovo')
 })


