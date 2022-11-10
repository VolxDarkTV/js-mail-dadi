// Creare un Array con le mail degli invitati
let myList = ['marco.decasperi@gmail.com', 'gigi.decasperi@gmail.com','vincenzo.decasperi@gmail.com', 'alberto.decasperi@gmail.com']

// inserimento Email
let myEmail = document.getElementById("your-e-mail");
let myButton = document.getElementById("your-great-button");
// DEBUG
console.log(myEmail);
// al premere del bottone eseguire condizioni
myButton.addEventListener('click',

    function(){

        // verifica dell'email inserita
        if(myEmail.value === myList[0]){
            // sei ammesso
            let congratsSir = document.getElementById("sorry-txt").innerHTML = `Salve ${myEmail.value}, e ben arrivato!`
        }else if(myEmail.value === myList[1]){
            let congratsSir = document.getElementById("sorry-txt").innerHTML = `Salve ${myEmail.value}, e ben arrivato!`
        }else if(myEmail.value === myList[2]){
            let congratsSir = document.getElementById("sorry-txt").innerHTML = `Salve ${myEmail.value}, e ben arrivato!`
        }else if(myEmail.value === myList[3]){
            let congratsSir = document.getElementById("sorry-txt").innerHTML = `Salve ${myEmail.value}, e ben arrivato!`
        }else{
            // non sei ammesso!
            let sorrySir = document.getElementById("sorry-txt").innerHTML = `Ci dispiace signor ${myEmail.value}, ma lei non è invitato.`
        }
        // INPUT refresh
        myEmail.value = null
    }
    

)
