
var emailInput = document.querySelector("input[id='email']")
var pwdInput = document.querySelector("input[id='password']")

const formErrors = {
    mail: false,
    pwd: false,
};

var Errors = document.querySelectorAll(".error-msg");


emailInput.addEventListener("input", (e) => {
    let test = isValidEmail(e.target.value);
    if (test == true) {
        formErrors.mail = true; // set mail error //
        Errors[0].innerHTML = "";
        Errors[0].classList.add("valid-msg") // remove error msg //
        e.target.classList.remove("error-mail");
        formErrors.mail = true;// set errorthe box error style //
    }
   else if (test == false) {
        formErrors.mail = false; // set mail error //
        Errors[0].classList.add("error-msg")// set error msg //
        Errors[0].innerHTML = "Invalid Email address"; 
        Errors[0].classList.remove("valid-msg"); // set the box error style //
        e.target.classList.add("error-mail"); // remove the box error style //
    
    } else if (emailInput.value="") {
        formErrors.mail = false; // set mail error //
        Errors[0].innerHTML = ""; // set error msg //
        e.target.classList.remove("error-mail"); // remove the box error style //
    }
});


pwdInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 8 ) {
        formErrors.pwd = true; // remove pwd error //
        Errors[1].classList.add("valid-msg") // remove error msg //
        Errors[1].innerHTML = "";
        e.target.classList.remove("error-pwd");
        formErrors.pwd = true;// remove the box error style //
    } else if (e.target.value.length == 0) {
        formErrors.pwd = false; // remove pwd error //
        Errors[1].innerHTML = "";
        
        e.target.classList.remove("error-pwd"); // remove the box error style //
    } else {
        formErrors.pwd = false; // set pwd error //
        Errors[1].innerHTML = "Password must be 8 characters at least"; 
        Errors[1].classList.remove("valid-msg"); // remove the box error("error-msg");// set error msg //
        e.target.classList.add("error-pwd"); // set the box error style //
    }
});
if(emailInput.value=""){
    Errors[0].innerHTML = "";
}

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };


function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const logInButton = document.querySelectorAll(".azerty");
const creatAccountDiv = document.querySelector(".submit-box .azerty")
logInButton[1].addEventListener("click",()=>{
    
    if(formErrors.mail===true && formErrors.pwd===true) {
        
        logInButton[0].classList.remove("azerty");
        logInButton[1].classList.add("hide");
        var newLogInButton = document.querySelector(".signup");
        newLogInButton.classList.remove("hide");
    }
})