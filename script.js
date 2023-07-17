document.addEventListener('DOMContentLoaded', function() {
        const addTaskButton = document.getElementById('addTaskButton');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        addTaskButton.addEventListener('click', function() {
          const taskText = taskInput.value.trim();

          if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';

            taskItem.appendChild(deleteButton);
            taskList.appendChild(taskItem);

            deleteButton.addEventListener('click', function() {
              taskItem.remove();
            });

            taskInput.value = '';
          }
        });
      });