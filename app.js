// JavaScript for Electric Meter Management

// Reference to form and table
const addMeterForm = document.getElementById("addMeterForm");
const metersList = document.getElementById("metersList");

// Function to handle the form submission
addMeterForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const meterNumber = document.getElementById("meterNumber").value.trim();
    const ownerName = document.getElementById("ownerName").value.trim();
    const currentReading = parseFloat(document.getElementById("currentReading").value.trim());
    const previousReading = parseFloat(document.getElementById("previousReading").value.trim());

    // Validate inputs
    if (
        !meterNumber ||
        !ownerName ||
        isNaN(currentReading) ||
        isNaN(previousReading) ||
        currentReading < 0 ||
        previousReading < 0 ||
        currentReading < previousReading
    ) {
        alert("Please check the values entered. Ensure all fields are filled and the current reading is greater than or equal to the previous reading.");
        return;
    }

    // Calculate consumption
    const consumption = currentReading - previousReading;

    // Add new row to the table
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${meterNumber}</td>
        <td>${ownerName}</td>
        <td>${currentReading.toFixed(2)}</td>
        <td>${previousReading.toFixed(2)}</td>
        <td>${consumption.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append the new row to the meters list
    metersList.appendChild(newRow);

    // Reset the form fields
    addMeterForm.reset();

    // Add delete functionality to the newly added delete button
    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
        newRow.remove();
    });
});
