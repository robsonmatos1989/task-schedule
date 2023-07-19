/*document.addEventListener('DOMContentLoaded', function() {
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
  });*/

document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskTimer = document.getElementById( 'taskTimer');
  const addTaskButton = document.getElementById('addTaskButton');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    const timerValue = parseInt(taskTimer.value);

    if (taskText !== '') {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = ' Excluir';


      /*const taskInput = document.createElement('input');
      taskInput.type = 'number';
      taskInput.placeholder = 'Digite o tempo em minutos';

      taskItem.appendChild(taskInput);*/
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });

      taskInput.value = '';
      taskTimer.value = '';

      // Define um temporizador de 1 minuto para exibir o alerta
      setTimeout(function() {

        showAlert(taskText);
      }, timerValue * 60 * 1000); // 1 minuto em milissegundos
    }
  });

  // Função para exibir o alerta
  function showAlert(taskText) {
    alert('Lembrete: ' + taskText);
  }

});

