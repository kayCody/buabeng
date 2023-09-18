
// Menu toggle
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  }
  else {
    MenuItems.style.maxHeight = "0px";
  }
}

// toggle form
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register() {
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
  Indicator.style.transform = "translateX(100px)";
}
function login() {
  RegForm.style.transform = "translateX(300px)";
  LoginForm.style.transform = "translateX(300px)";
  Indicator.style.transform = "translateX(0px)";
}
// cart script
const productData = [
  {
    image: "image_s/buy-1.jpg",
    name: "Red Printed T-Shirt",
    price: 30.0,
  },
  {
    image: "image_s/buy-2.jpg",
    name: "Black Nick Shoes",
    price: 40.0,
  },
  {
    image: "image_s/buy-3.jpg",
    name: "Gray Coloured Joggers",
    price: 75.0,
  },
  // Add more product data as needed
];
function populateProductTable() {
  const productTable = document.getElementById("productTable");

  productData.forEach((product, index) => {
    const row = productTable.insertRow();

    const imageCell = row.insertCell(0);
    const quantityCell = row.insertCell(1);
    const subtotalCell = row.insertCell(2);

    imageCell.innerHTML = `<div class="cart-info">
                    <img src="${product.image}" alt="${product.name}" />
                    <div class="milli">
                        <p>${product.name}</p>
                        <small>Price : ${product.price.toFixed(2)}</small>
                        <br />
                        <a href="#" class="remove-link" data-index="${index}">Remove</a>
                    </div>
                </div>`;
    quantityCell.innerHTML =
      '<input type="number" class="quantity-input" value="1" min="1">';
    subtotalCell.textContent = "$" + product.price.toFixed(2);

    // Calculate and update subtotal dynamically
    const quantityInput = row.querySelector(".quantity-input");
    quantityInput.addEventListener("input", updateTotal);
  });

  // Add event listener to the table for removing items
  productTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-link")) {
      removeProduct(event.target.getAttribute("data-index"));
    }
  });

  // Initialize total calculation
  updateTotal();
}
// Function to remove a product
function removeProduct(indexToRemove) {
  const productTable = document.getElementById("productTable");
  productTable.deleteRow(parseInt(indexToRemove) + 1); // +1 to account for header row

  updateTotal();
}

// Calculate and update subtotal, tax, and total
function updateTotal() {
  let subtotal = 0;

  // Iterate through each product row
  const rows = document.querySelectorAll("#productTable tr");
  rows.forEach((row, index) => {
    if (index > 0) {
      // Skip the header row
      const quantityInput = row.querySelector(".quantity-input");
      const quantity = parseInt(quantityInput.value);
      const price = productData[index - 1].price; // Subtract 1 to match array index
      const productSubtotal = price * quantity;
      subtotal += productSubtotal;

      const subtotalCell = row.cells[2];
      subtotalCell.textContent = "$" + productSubtotal.toFixed(2);
    }
  });

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  const subtotalCell = document.getElementById("subtotal");
  const taxCell = document.getElementById("tax");
  const totalCell = document.getElementById("total");

  subtotalCell.textContent = "$" + subtotal.toFixed(2);
  taxCell.textContent = "$" + tax.toFixed(2);
  totalCell.textContent = "$" + total.toFixed(2);
}
// Call the function to populate the product table
populateProductTable();

// product gallery
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
}