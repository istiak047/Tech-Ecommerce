var wrapperDivs = document.getElementsByClassName("wrapper");
var paybutton = document.querySelector(".paybutton");

// paybutton.addEventListener("click", () => {
//     wrapperDivs[0].classList.add("hide");
//     wrapperDivs[1].classList.remove("hide");
// })

var emailInput = document.querySelector("input[id='email']")
var cardInput = document.querySelector("input[id='card']");
var cvcInput = document.querySelector("input[id='cvc']");


cardInput.addEventListener("input", ()=>{
    if(cardInput.value.length==4||cardInput.value.length==9||cardInput.value.length==14){
        cardInput.value = cardInput.value+" ";
    }
})







 function onlyNumberKey(evt) {
        // Only ASCII character in that range allowed
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
            return false;
        return true;
}



//email verification
const formErrors = {
    mail: false,
    
};

var emailError = document.querySelector(".error-msg");


emailInput.addEventListener("input", (e) => {
    let test = isValidEmail(e.target.value);
    if (test == true) {
        formErrors.mail = true; // set mail error //
        emailError.innerHTML = "";
        emailError.classList.add("valid-msg") // remove error msg //
        e.target.classList.remove("error-mail");
        formErrors.mail = true;// set errorthe box error style //
    }
   else if (test == false) {
        formErrors.mail = false; // set mail error //
        emailError.innerHTML = "Invalid Email address"; 
        emailError.classList.remove("valid-msg"); // set the box error style //
        emailError.classList.add("error-msg")// set error msg //
        e.target.classList.add("error-mail"); // remove the box error style //
    
    } else if (test == "mail empty") {
        formErrors.mail = false; // set mail error //
        emailError.innerHTML = ""; // set error msg //
        e.target.classList.remove("error-mail"); // remove the box error style //
    }
});

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };