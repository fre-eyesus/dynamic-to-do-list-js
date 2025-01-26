document.addEventListener('DOMContentLoaded', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        tasks.forEach(taskText => {
            const task = document.createElement('li');
            task.textContent = taskText;
            const remove = document.createElement('button');
            remove.textContent = "Remove";
            remove.classList.add("remove-btn");
            remove.addEventListener('click', function() {
                taskList.removeChild(task);
                tasks.splice(tasks.indexOf(taskText), 1);
                saveTasks();
            });
            task.appendChild(remove);
            taskList.appendChild(task);
        });
    }

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
                tasks.splice(tasks.indexOf(taskText), 1);
                saveTasks();
            });
            task.appendChild(remove);
            taskList.appendChild(task);
            tasks.push(taskText);
            saveTasks();
            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});