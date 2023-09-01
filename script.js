// Array of colors
const colors = ["Red", "White", "Blue", "Yellow", "Silver", "Gray"];

// Get the dropdown element
const colorDropdown = document.getElementById("color");

// Populate the dropdown with colors
for (const color of colors) {
  const option = document.createElement("option");
  console.log(option)
  option.value = color;
  option.textContent = color;
  colorDropdown.appendChild(option);
}

// Array of car makes based on fuel types
const carMakesByFuel = {
  CNG: ["Hyundai", "Suzuki"],
  Diesel: ["VW", "Toyota"],
  EV: ["Tesla", "TATA"],
};

const fuelTypeDropdown = document.getElementById("fuelType");
const carMakeDropdown = document.getElementById("make");

// Function to update car makes based on selected fuel type
function updateCarMakes() {
  const selectedFuel = fuelTypeDropdown.value;
  carMakeDropdown.innerHTML = ""; // Clear previous options

  if (selectedFuel in carMakesByFuel) {
    for (const make of carMakesByFuel[selectedFuel]) {
      console.log(make);
      const option = document.createElement("option");
      option.value = make;
      option.textContent = make;
      carMakeDropdown.appendChild(option);
    }
  } else {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Select a make";
    carMakeDropdown.appendChild(option);
  }
}

// Listen for changes in fuel type dropdown
fuelTypeDropdown.addEventListener("change", updateCarMakes);

document.getElementById("submitBtn").addEventListener("click", function () {
  const make = document.getElementById("make").value;
  const model = document.getElementById("model").value;
  const year = document.getElementById("year").value;
  const color = document.getElementById("color").value;
  const price = document.getElementById("price").value;
  const fuelType = document.getElementById("fuelType").value;
  

  // Check for missing fields
  if (!make || !model || !year || !color || !price || !fuelType) {
    alert("Please fill in all required fields.");
    return;
  }

  if (price < 1000 || price > 1000000) {
    alert(`Price must be between 10000 and 5000000.`);
    return;
  }

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
                <td>${make}</td>
                <td>${model}</td>
                <td>${year}</td>
                <td>${color}</td>
                <td>${price}</td>
                <td>${fuelType}</td>


            `;

  document
    .getElementById("carTable")
    .getElementsByTagName("tbody")[0]
    .appendChild(newRow);

  // Clear form fields
  document.getElementById("carForm").reset();
});
