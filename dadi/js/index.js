// generare un numero random da 1 a 6 per utente e per pc al click del button
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", 
    function(){
        // Numero Utente
        const userCasualNumber = Math.floor(Math.random() * 6) + 1;
        const PcCasualNumber = Math.floor(Math.random() * 6) + 1;
        let userNumber = document.getElementById("dice-user").innerHTML = `numero: ` + userCasualNumber;

        // Numero PC
        let computerNumber = document.getElementById("dice-computer").innerHTML = `numero: ` + PcCasualNumber;

        // condizioni affinchè vinca un numero piùttosto che un'altro
        
        if(userCasualNumber > PcCasualNumber){
            let resultsView = document.getElementById("results-view").innerHTML = `Congratulazioni hai vinto!`
        }else{
            let resultsView = document.getElementById("results-view").innerHTML = `Ops! Hai perso!`
        }
    }
)

