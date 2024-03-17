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

// npm

//

const divAccordion = document.querySelectorAll(".container-accordion");

//
for (let item of divAccordion) {
  item.addEventListener("click", function (e) {
    this.classList.toggle("active");
  });
}

//
const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("is-open");

    let description = item.querySelector(".accordion-content-description");
    if (item.classList.contains("is-open")) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    // function to pass the index number of clicked header
    removeOpenedContent(index);
  });
});

function removeOpenedContent(index) {
  accordionContent.forEach((item2, index2) => {
    if (index != index2) {
      item2.classList.remove("is-open");
      let descrip = item2.querySelector(".accordion-content-description");
      descrip.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}

//

var splide = new Splide(".splide", {
  perPage: 3,
  rewind: true,
});

splide.mount();

//
