document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskTableBody = document.getElementById('taskTableBody');
    const API_URL = 'http://localhost:5000/tasks'; // JSON Server URL

    // Fetch tasks from the API on page load
    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => displayTasks(tasks))
        .catch(error => console.error('Error fetching tasks:', error));

    // Add a new task
    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const taskStatus = document.getElementById('taskStatus').value;

        const newTask = { name: taskName, status: taskStatus };

        // Save the task via POST request to JSON Server
        fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        })
            .then(() => fetch(API_URL)) // Fetch updated task list
            .then(response => response.json())
            .then(tasks => displayTasks(tasks))
            .catch(error => console.error('Error adding task:', error));
    });

    // Display tasks in the table
    function displayTasks(tasks) {
        taskTableBody.innerHTML = ''; // Clear table before adding
        tasks.forEach(task => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.name}</td>
                <td>${task.status}</td>
            `;
            taskTableBody.appendChild(row);
        });
    }
});
