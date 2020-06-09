const form = document.getElementById("form");
const email = document.getElementById("user-email");

form.addEventListener("submit", (e) => {
  console.log("event listener");

  e.preventDefault();
  checkInput();
});

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Please enter a valid email address.");
  } else if (!isEmail(emailValue)) {
    console.log("invalid email. go to isEmail function");
    setErrorFor(email, "Please enter a valid email address.");
  } else {
    setSuccessFor(email, "Success!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  console.log(formControl);

  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
  console.log("invalid email or empty value");
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control success";
  console.log("success");
}

function isEmail(email) {
  console.log("isEmail function");

  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(String(email).toLowerCase());
  // console.log("isEmail function checked.");
}
