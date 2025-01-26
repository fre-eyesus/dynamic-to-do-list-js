document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please enter a task');
            return;
        } else {
            const task = document.createElement('li');
            task.textContent = taskText;
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.classList.add("remove-btn");
            remove.addEventListener('click', function() {
                taskList.removeChild(task);
            });
            task.appendChild(remove);
            taskList.appendChild(task);
            taskInput.value = "";
        }
    }

    addButton.addEventListener('click',addTask);

    taskInput.addEventListener('keypress', function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});