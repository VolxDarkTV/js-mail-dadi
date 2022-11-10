// generare un numero random da 1 a 6 per utente e per pc al click del button
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", 
    function(){
        // Numero Utente
        let userNumber = document.getElementById("dice-user").innerHTML = `numero: ` + (Math.floor(Math.random() * 6) + 1);

        // Numero PC
        let computerNumber = document.getElementById("dice-computer").innerHTML = `numero: ` + (Math.floor(Math.random() * 6) + 1);

        // condizioni affinchè vinca un numero piùttosto che un'altro
        
    }
)

