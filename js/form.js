"use strict";

//

// Navigation;

const divBar = document.getElementById("menu");
divBar.style.backgroundImage = "url('img/vogue2.jpg')";
divBar.style.backgroundSize = "cover";
divBar.style.backgroundPosition = "center";

const vogueIcon = document.getElementById("vogue-icon");

vogueIcon.addEventListener("click", function () {
  this.classList.toggle("close");
  divBar.classList.toggle("overlay");
  if (divBar.classList.contains("overlay")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

//

// ---- form element
const formElement = document.getElementById("resgitration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "FILL IN THE USERNAME";
  }

  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "ENTER THE PASSWORD";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "PASSWORD DOESNOT MATCH";
  }

  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "CHOOSE GENDER";
  }

  let MesaageValue = document.getElementById("user-message").value;

  if (MesaageValue == "") {
    errors.message = "IMPORTANT TO FILL";
  }

  let emailValues = document.getElementById("emailfield").value;

  if (emailValues == "") {
    errors.email = "ENTER E-MAIL";
  }

  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "AGREE TERMS AND CONDITIONS!";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    console.log(item);

    let errorPelement = document.getElementById("error-" + item);
    console.log(errorPelement);

    if (errorPelement) {
      errorPelement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }

  console.log(errors);
});

let passwShow = document.getElementById("passwordfield");
let passwShow2 = document.getElementById("passwordfield2");
let icon = document.getElementById("showIcon");
let icon2 = document.getElementById("showIcon2");

icon.addEventListener("click", function () {
  if (passwShow.type == "password") {
    passwShow.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwShow.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
});

icon2.addEventListener("click", function () {
  if (passwShow2.type == "password") {
    passwShow2.setAttribute("type", "text");
    icon2.classList.remove("fa-eye");
    icon2.classList.add("fa-eye-slash");
  } else {
    passwShow2.setAttribute("type", "password");
    icon2.classList.remove("fa-eye-slash");
    icon2.classList.add("fa-eye");
  }
});

let email = document.getElementById("emailfield");

function validationEmail() {
  let emailValue = document.getElementById("emailfield").value;
  let textError = document.getElementById("error-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailPattern.test(emailValue)) {
    textError.innerText = "CORRECT";
    textError.style.color = "green";
  } else {
    textError.innerText = "INCORRECT";
    textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = "";
  }
}

email.addEventListener("keyup", validationEmail);

// const newBackgroundImage =
//   "url(https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

// document.body.style.backgroundImage = newBackgroundImage;
