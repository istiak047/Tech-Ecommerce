const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const subjectInput = document.querySelector("input[name='subject']");
const messageInput = document.querySelector("textarea[name='message']");
const messageOutput = document.querySelector(".thank-you");
const btnOutput = document.querySelector(".submit-again");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
subjectInput.isValid = () => !!subjectInput.value;
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, subjectInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};
const restForm = () =>{
    nameInput.value=" ";
    emailInput.value=" ";
    subjectInput.value=" ";
    messageInput.value=" ";
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
    form.classList.add("hide");
    messageOutput.classList.remove("hide");
    btnOutput.classList.remove("hide");

    Email.send({
      
      To : 'rezzag2016@gmail.com',
      From : emailInput.value,
      Subject : subjectInput.value,
      Body : messageInput.value
  });
  
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));

btnOutput.addEventListener("click",()=>{
    messageOutput.classList.add("hide");
    btnOutput.classList.add("hide");
    form.classList.remove("hide");
    restForm();
});

