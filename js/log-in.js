// form errors //
const mailInput = document.querySelector(".email-field input");
const mailError = document.querySelector(".email-field .error-msg");

const pwdInput = document.querySelector(".pwd-field input");
const pwdError = document.querySelector(".pwd-field .error-msg");

const logInButton = document.querySelector(".azerty");

const formErrors = {
    mail: false,
    pwd: false,
};

// mail //
mailInput.addEventListener("input", (e) => {
    let test = isValidEmail(e.target.value);

    if (test == true) {
        formErrors.mail = true; // set mail error //
        mailError.innerHTML = "Valid Email Adress";
        mailError.classList.add("valid-msg") // remove error msg //
        e.target.classList.remove("error-mail");
        formErrors.mail = true;// set errorthe box error style //
    } else if (test == false) {
        formErrors.mail = false; // set mail error //
        mailError.innerHTML = "Invalid Email address"; 
        mailError.classList.remove("valid-msg"); // set the box error style //
        mailError.classList.add("error-msg")// set error msg //
        e.target.classList.add("error-mail"); // remove the box error style //
    
    } else if (test == "mail empty") {
        formErrors.mail = false; // set mail error //
        mailError.innerHTML = ""; // set error msg //
        e.target.classList.remove("error-mail"); // remove the box error style //
    }
});
//  //

// pwd //
pwdInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 8 ) {
        formErrors.pwd = true; // remove pwd error //
        pwdError.innerHTML = "Valid Password";
        pwdError.classList.add("valid-msg") // remove error msg //
        e.target.classList.remove("error-pwd");
        formErrors.pwd = true;// remove the box error style //
    } else if (e.target.value.length == 0) {
        formErrors.pwd = false; // remove pwd error //
        pwdError.innerHTML = "";
        mailError.classList.add("error-msg") // remove error msg //
        e.target.classList.remove("error-pwd"); // remove the box error style //
    } else {
        formErrors.pwd = false; // set pwd error //
        pwdError.innerHTML = "Password must be 8 characters at least"; 
        pwdError.classList.remove("valid-msg"); // remove the box error("error-msg");// set error msg //
        e.target.classList.add("error-pwd"); // set the box error style //
    }
});
//  //


//  //
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(email).toLowerCase()));
    return re.test(String(email).toLowerCase());
  };




logInButton.addEventListener("click",()=>{
    if(formErrors.mail===true && formErrors.pwd===true) {
        logInButton.classList.add("hide");
        var newLogInButton = document.querySelector(".login");
        newLogInButton.classList.remove("hide");
    }
})