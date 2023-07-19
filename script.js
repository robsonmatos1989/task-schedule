document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');

    addTaskButton.addEventListener('click', function() {
      //O trim() é um método de string em JavaScript que remove quaisquer espaços em branco no início e no final da string
      const taskText = taskInput.value.trim();

      if(taskText !== ''){
        const taskItem = document.createElement('li');//cria um elemento do tipo li
        taskItem.textContent = taskText;

        const deleteButton = document.createElement('button');// cria um elemento do tipo botton
        deleteButton.textContent = 'Excluir';

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        deleteButton.addEventListener('click', function(){
          taskItem.remove();
        });
        taskInput.value = '';
      }
    });
  });

