

const username = document.getElementById("username");
const password = document.getElementById("password");
const myForm = document.getElementById("myform");
const welcomeMsg = document.getElementById("welcomemsg");

const errorMsg = document.getElementById("errormsg");
/* nyt medlemt form */
const NewMemberBtn = document.getElementById("nytmedlembtn");
const myFormDisplay = document.getElementById("myformdisplay");
const newMemberForm = document.getElementById("newmember")
const newMemberFormDisplay = document.getElementById("newmemberdisplay");
const firstName = document.getElementById("name");
const lastName = document.getElementById("lastname");
const newUsername = document.getElementById("brugernavn");
const email = document.getElementById("ademail");
const adPassword = document.getElementById ("adpassword");
const repeatPassword = document.getElementById("repeatpassword")
;
const passwordErrorMsg = document.getElementById("passworderror");

const loginform = document.getElementById("loginform");
const oprettet = document.getElementById("oprettet");




username.focus(); 
/* placere courser i username feltet når siden bliver loaded */

let jsUsername = "admin";
let jsPassword = "1234";
let jsUsername2 = "martin";
let jsPassword2 = "12345;"

myForm.addEventListener("submit", (e) => {
    /* lytter på form buttons sybmit funktion */

    e.preventDefault();
    /* stoper buttons default funktion, at refresh page. */


    if(username.value=== "" || password.value=== ""){
        console.log("du skal taste noget i feltet");
        errorMsg.innerHTML = "Udfyld alle felterne - tak";

    } /* hvis username felt er udfyldt eller pasword felt. || betyder or */

    else{
        /* Her er der skrevet noget i username-feltet */
        if(username.value=== jsUsername && password.value === jsPassword ||username.value=== jsUsername2 && password.value === jsPassword2) {
          
            NewMemberBtn.style.display= "none";
            myForm.style.display = "none";
            
            /*    welcomeMsg.innerHTML = `velkommen ${username.value}`; */
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            
            welcomeMsg.style.display = "block";
            welcomeMsg.innerHTML = "velkommen til " + username.value;

            setTimeout(() => {
                welcomeMsg.style.display = 'none';
              }, 2000);

        }
        else {
            errorMsg.innerHTML = "Brugernavn eller kodeord er forkert";
            
        }
    }

});

newMemberForm.addEventListener("submit", (e) => {
   

    e.preventDefault();



    if(firstName.value==="" || lastName.value==="" || newUsername.value===""|| email.value==="" || adPassword.value==="" || repeatPassword.value===""){
       
        errorMsg.innerHTML = "Udfyld alle felterne - tak";

    } 



    else{
        if(adPassword.value === repeatPassword.value){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            loginform.style.display = "none";
            welcomeMsg.style.display = "block";
            welcomeMsg.innerHTML = "Tillykke du er nu oprettet";
            setTimeout(() => {
                welcomeMsg.style.display = 'none';
              }, 2000);

        }
        
        else {
            passwordErrorMsg.innerHTML = "Adgangskoder er ikke ens";

        }
    }

});



function onClick() {
    myFormDisplay.style.display = "none";
    NewMemberBtn.style.display= "none";
    newMemberFormDisplay.style.display = "block";

}

function showlogin() {
loginform.style.display = "block";
var elmnt = document.getElementById("view");
    elmnt.scrollIntoView();
}

