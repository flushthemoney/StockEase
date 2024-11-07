let inventory = [
  { name: "Apple", quantity: 10, price: 0.5 },
  { name: "Orange", quantity: 20, price: 0.7 },
  { name: "Banana", quantity: 15, price: 0.3 },
];

function displayInventory() {
  const inventoryBody = document.getElementById("inventoryBody");
  inventoryBody.innerHTML = "";

  inventory.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price}</td>
            <td>
                <button onclick="editItem(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </td>
        `;
    inventoryBody.appendChild(row);
  });
}

function addItem() {
  const name = document.getElementById("itemName").value;
  const quantity = parseInt(document.getElementById("itemQuantity").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (name && quantity && price) {
    inventory.push({ name, quantity, price });
    displayInventory();
    clearForm();
  } else {
    alert("Please fill all fields!");
  }
}

function deleteItem(index) {
  inventory.splice(index, 1);
  displayInventory();
}

function editItem(index) {
  const item = inventory[index];

  document.getElementById("itemName").value = item.name;
  document.getElementById("itemQuantity").value = item.quantity;
  document.getElementById("itemPrice").value = item.price;

  document.getElementById("itemName").dataset.index = index;
  document.querySelector("button[onclick='addItem()']").innerText =
    "Update Item";
  document.querySelector("button[onclick='addItem()']").onclick = function () {
    updateItem(index);
  };
}

function updateItem(index) {
  const name = document.getElementById("itemName").value;
  const quantity = parseInt(document.getElementById("itemQuantity").value);
  const price = parseFloat(document.getElementById("itemPrice").value);

  if (name && quantity && price) {
    inventory[index] = { name, quantity, price };
    displayInventory();
    clearForm();
  } else {
    alert("Please fill all fields!");
  }
}

function clearForm() {
  document.getElementById("itemName").value = "";
  document.getElementById("itemQuantity").value = "";
  document.getElementById("itemPrice").value = "";

  const addButton = document.querySelector("button[onclick='updateItem()']");
  if (addButton) {
    addButton.innerText = "Add Item";
    addButton.onclick = addItem;
  }
}

displayInventory();
