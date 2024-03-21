"use strict";

//

import * as input from "./input.js";

input;

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

//
document.addEventListener("DOMContentLoaded", function () {
  let productsData;
  fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Non-GMO&product_type=nail_polish"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      productsData = data;

      displayProducts(productsData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function displayProducts(products) {
  const productsContainer = document.getElementById("makeup-wrapper");
  const productList = document.createElement("ul");
  productList.classList.add("product-list");
  const productTitle = document.createElement("h2");
  productTitle.classList.add("product-title");
  productTitle.textContent = "Nail Polish";

  productsContainer.innerHTML = ""; // Clear existing content
  productsContainer.appendChild(productTitle);
  productsContainer.appendChild(productList);

  if (products && products.length > 0) {
    products.forEach((product) => {
      const productItem = document.createElement("li");
      productItem.classList.add("product-item");

      const productImage = document.createElement("img");
      productImage.src = product.image_link;
      productImage.alt = product.name;
      productImage.classList.add("product-image");
      productImage.style.maxWidth = "100px";
      productImage.style.maxHeight = "100px";

      const productDetails = document.createElement("div");
      productDetails.classList.add("product-details");

      const productName = document.createElement("strong");
      productName.classList.add("product-name");
      productName.textContent = product.name;

      const brandInfo = document.createElement("p");
      brandInfo.classList.add("product-info");
      brandInfo.textContent = `Brand: ${product.brand}`;

      const priceInfo = document.createElement("p");
      priceInfo.classList.add("product-info");
      priceInfo.textContent = `Price: ${product.price}`;

      productDetails.appendChild(productName);
      productDetails.appendChild(brandInfo);
      productDetails.appendChild(priceInfo);

      productItem.appendChild(productImage);
      productItem.appendChild(productDetails);

      productList.appendChild(productItem);
    });
  } else {
    const noProductItem = document.createElement("li");
    noProductItem.textContent = "No products available";
    productList.appendChild(noProductItem);
  }
}

// ACCORDION



//

var splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
});

splide.mount();

//

//

// ---- form element
const formElement = document.getElementById("registration");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const errors = {};

  let usernameValue = document.getElementById("usernamefield").value;

  if (usernameValue == "") {
    errors.username = "Please fill in the username field.";
  }

  let passwValue = document.getElementById("passwordfield").value;
  let passw2Value = document.getElementById("passwordfield2").value;

  if (passwValue == "") {
    errors.passw = "Password field is empty.";
  }

  if (passwValue != passw2Value) {
    errors.passw2 = "Passwords do not match.";
  }

  let gender = false;

  formElement.querySelectorAll('[name = "gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select a gender.";
  }

  let messageValue = document.getElementById("user-message").value;

  if (messageValue == "") {
    errors.message = "Please fill in the message field.";
  }

  let emailValue = document.getElementById("emailfield").value;

  if (emailValue == "") {
    errors.email = "Please fill in the email field.";
  }

  let checkInput = document.getElementById("agree").checked;

  if (!checkInput) {
    errors.check = "Please agree to the terms and conditions.";
  }

  formElement.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });

  for (let item in errors) {
    let errorPelement = document.getElementById("error-" + item);
    if (errorPelement) {
      errorPelement.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    formElement.submit();
  }
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
    textError.innerText = "Email is correct";
    textError.style.color = "green";
  } else {
    textError.innerText = "Email is incorrect";
    textError.style.color = "red";
  }

  if (emailValue == "") {
    textError.innerHTML = "";
  }
}

email.addEventListener("keyup", validationEmail);
//


