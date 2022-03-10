const myNewsForm = document.getElementById("newsletterform");
const inputEmail = document.getElementById("newsemail");
const emailErrorMsg = document.getElementById("email-errormsg");

myNewsForm.addEventListener("submit", (e) => {

    e.preventDefault();

    if(inputEmail.value ===""){
        /* skriv en fejl besked til brugeren */
        
        emailErrorMsg.innerHTML="du har ikke tastet i noget felt";
    }
    else {
        /* lav en ny betingelse hvor der bliver tjekket om mail-adressen er valid */
        let myRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        
        if(inputEmail.value.match(myRegex)){
            /* hvis mail matcher Regex er mailen valid  */
            console.log("valid");
            emailErrorMsg.innerHTML="Du er nu tilmeldt til nyhedsbrevet";

        }

        else{
            /* hvis mailen ikke matcher */
            console.log("du har ikke en valid email");
            emailErrorMsg.innerHTML="Skriv venligst en rigtig mail-adresse - eks. peter@mail.dk";

        }
    }
});