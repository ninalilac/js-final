"use strict";

// import


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
let productsData; // Declare a variable to store products data

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
    //
    displayProducts(productsData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function displayProducts(products) {
  //
  const productsContainer = document.getElementById("makeup-wrapper");

  //
  let html = '<h2 class="product-title"> Nail Polish </h2>';
  html += '<ul class="product-list">';

  if (products) {
    products.forEach((product) => {
      html += `<li class="product-item">
                    <img src="${product.image_link}" alt="${product.name}" class="product-image" style="max-width: 100px; max-height: 100px;">
                    <div class="product-details">
                        <strong class="product-name">${product.name}</strong>
                        <p class="product-info">Brand: ${product.brand}</p>
                        <p class="product-info">Price: ${product.price}</p>
                    </div>
                </li>`;
    });
  } else {
    //
    html += "<li>No products available</li>";
  }

  html += "</ul>";

  //
  productsContainer.innerHTML = html;
}
displayProducts();

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

var splide = new Splide( '.splide', {
  perPage: 3,
  rewind : true,
} );

splide.mount();