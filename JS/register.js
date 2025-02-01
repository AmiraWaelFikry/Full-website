const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const genderGroup = document.getElementById("genderGroup");

// Registeration Validation Function

export function myValidation() {
  let isValid = true;
  //Rejex
  const nameRegex = /^.{1,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?~`-]).{8,20}$/;

  //check name
  let nameValid = inputValidation(
    nameInput,
    nameRegex,
    "name",
    "Name cannot exceed 20 characters"
  );
  //check email
  let emailValid = inputValidation(
    emailInput,
    emailRegex,
    "email",
    "Invalid email format"
  );
  // check password
  let passwordValid = inputValidation(
    passwordInput,
    passwordRegex,
    "password",
    "Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
  );

  if (!nameValid || !emailValid || !passwordValid) {
    isValid = false;
  }

  // Check gender selected
  const genderRadios = document.getElementsByName("gender");

  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      genderGroup.classList.add("text-success");
      genderGroup.classList.remove("text-danger");
      break;
    } else {
      genderGroup.classList.add("text-danger");
      genderGroup.classList.remove("text-success");
      isValid = false;
    }
  }

  if (isValid) {
    localStorage.setItem("username", nameInput.value);
  }

  return isValid;
}

/*
========================
Helping Functions
=========================
*/

//This two functions are used in pay.js

export function inputValidation(input, rejex, inputname, invalidmessage) {
  let isValid = true;
  const inputField = input.closest(".input-container");
  let invalidMessage = inputField.querySelector(".invalid-feedback");

  if (input.value === "") {
    input.classList.add("is-invalid");
    invalidMessage.innerHTML = `please enter your ${inputname}`;
    isValid = false;
  } else if (!rejex.test(input.value)) {
    input.classList.add("is-invalid");
    invalidMessage.innerHTML = `${invalidmessage}`;

    isValid = false;
  } else {
    input.classList.add("is-valid");
  }
  return isValid;
}

export function restMessages(inputs) {
  for (const input of inputs) {
    input.classList.remove("is-invalid", "is-valid");
    input.value = "";
  }
}
