document.addEventListener("DOMContentLoaded", () => {
    // Get references to the form and table body
    const taskForm = document.getElementById("taskForm");
    const taskTableBody = document.getElementById("taskTableBody");

    // Add an event listener for the form submission
    taskForm.addEventListener("submit", (event) => {
        // Prevent the form from refreshing the page
        event.preventDefault();

        // Get values from the form inputs
        const taskName = document.getElementById("taskName").value;
        const taskStatus = document.getElementById("taskStatus").value;

        // Create a new row and cells
        const newRow = document.createElement("tr");
        const nameCell = document.createElement("td");
        const statusCell = document.createElement("td");

        // Populate the cells with data
        nameCell.textContent = taskName;
        statusCell.textContent = taskStatus;

        // Append cells to the row
        newRow.appendChild(nameCell);
        newRow.appendChild(statusCell);

        // Append the row to the table body
        taskTableBody.appendChild(newRow);

        // Reset the form fields
        taskForm.reset();
    });
});
