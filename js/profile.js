const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const phoneInput = document.querySelector("input[name='phone']");
const adressInput = document.querySelector("input[name='adress']");
const emailInput = document.querySelector("input[name='email']");
const passwordInput = document.querySelector("input[name='password']");
const btnSubmit = document.querySelector(".submit-button");
const btnReset = document.querySelector(".discard");



nameInput.isValid = () => !!nameInput.value;
phoneInput.isValid = () => isValidPhone(phoneInput.value);
adressInput.isValid = () => !!adressInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
passwordInput.isValid = () => !!passwordInput.value;

const inputFields = [nameInput, phoneInput, adressInput, emailInput, passwordInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};
const restForm = () =>{
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    adressInput.value="";
    passwordInput.value="";
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
    
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

btnReset.addEventListener("click",()=>{
    restForm();
   
    var placeholder1 = phoneInput.getAttribute("placeholder");
    var placeholder2 = adressInput.getAttribute("placeholder");
    var placeholder3 = emailInput.getAttribute("placeholder");
    var placeholder4 = passwordInput.getAttribute("placeholder");
   
});

