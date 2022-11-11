// Creare un Array con le mail degli invitati
let myList = ['marco.decasperi@gmail.com', 'gigi.decasperi@gmail.com','vincenzo.decasperi@gmail.com', 'alberto.decasperi@gmail.com']

// inserimento Email
let myEmail = document.getElementById("your-e-mail");
let myButton = document.getElementById("your-great-button");
let exit = document.getElementById("exit.txt");
// DEBUG
console.log(myEmail);
// al premere del bottone eseguire condizioni
myButton.addEventListener('click',

    function(){
        //persone non in lista
        let inputUtente = myEmail.value;
        let possoEntrare = false;

        //ciclo
        for(let i = 0; i < myList.length; i++){
            if(inputUtente === myList[i]){
                possoEntrare = true;
            }
        }
        
        if(possoEntrare === true){
            document.getElementById("exit-txt").innerHTML = `Benvenuto ${myEmail.value} sei in lista!`
        }else{
            document.getElementById("exit-txt").innerHTML = `${myEmail.value} non sei in lista!`
        }
        
        
    }
    

)
