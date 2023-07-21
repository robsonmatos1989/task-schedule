document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskTimer = document.getElementById('taskTimer');
  const addTaskButton = document.getElementById('addTaskButton');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const timerValue = parseInt(taskTimer.value);

    if (taskText !== '') {
      const taskId = generateTaskId();

      const taskItem = document.createElement('li');

      const taskContainer = document.createElement('div'); // Elemento para conter o texto da tarefa e o botão
      taskItem.appendChild(taskContainer);

      const taskTextSpan = document.createElement('span');
      taskTextSpan.textContent = taskText;
      taskContainer.appendChild(taskTextSpan);

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Excluir';

      taskContainer.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      deleteButton.addEventListener('click', function() {
        taskItem.remove();
        removeTaskFromLocalStorage(taskId);
      });

      taskInput.value = '';
      taskTimer.value = '';

      saveTaskToLocalStorage({ id: taskId, text: taskText });

      setTimeout(function() {
        showAlert(taskText);
      }, timerValue * 60 * 1000);
    }
  });

  function showAlert(taskText) {
    alert('Lembrete: ' + taskText);
  }

  function saveTaskToLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function removeTaskFromLocalStorage(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function generateTaskId() {
    return Date.now().toString(36);
  }

  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      tasks.forEach(task => {
        const taskItem = document.createElement('li');

        const taskContainer = document.createElement('div'); // Elemento para conter o texto da tarefa e o botão
        taskItem.appendChild(taskContainer);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = task.text;
        taskContainer.appendChild(taskTextSpan);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';

        deleteButton.addEventListener('click', function() {
          taskItem.remove();
          removeTaskFromLocalStorage(task.id);
        });

        taskContainer.appendChild(deleteButton);
        taskList.appendChild(taskItem);
      });
    }
  }

  // Chamar a função loadTasksFromLocalStorage após a definição dos elementos
  loadTasksFromLocalStorage();
});
