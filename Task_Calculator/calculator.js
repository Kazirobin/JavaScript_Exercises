let totalFund = 0;
let products = [];
const productNames = ["Alu", "Piaj", "Ata", "Moyda", "Suji"];

document.getElementById("total-fund").addEventListener("input", (event) => {
  totalFund = parseFloat(event.target.value) || 0;
  updateSummary();
});

function addProduct() {
  const productId = products.length;
  products.push({ name: productNames[0], quantity: 1, price: 0 });

  const productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
    <div>
      <label>Product Name: </label>
      <select onchange="updateProduct(${productId}, 'name', this.value)">
        ${productNames.map(name => `<option value="${name}">${name}</option>`).join("")}
      </select>
    </div>
    <div>
      <label>Quantity: </label>
      <input type="number" min="1" value="1" onchange="updateProduct(${productId}, 'quantity', this.value)" />
    </div>
    <div>
      <label>Price: $</label>
      <input type="number" min="0" value="0" onchange="updateProduct(${productId}, 'price', this.value)" />
    </div>
  `;

  document.getElementById("product-list").appendChild(productDiv);
}

function updateProduct(productId, field, value) {
  if (field === "quantity" || field === "price") {
    products[productId][field] = parseFloat(value) || 0;
  } else if (field === "name") {
    products[productId][field] = value;
  }
  updateSummary();
}

function updateSummary() {
  const totalCost = products.reduce((sum, product) => sum + product.quantity * product.price, 0);
  const remainingBalance = totalFund - totalCost;
  const percentage = totalFund > 0 ? ((totalCost / totalFund) * 100).toFixed(2) : 0;

  document.getElementById("total-cost").innerText = totalCost.toFixed(2);
  document.getElementById("remaining-balance").innerText = remainingBalance.toFixed(2);
  document.getElementById("percentage").innerText = percentage;
}
