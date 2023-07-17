document.addEventListener('DOMContentLoaded', function() {

  const taskInput = document.getElementbyId('taskInput');
  const taskList = document.getElementbyId('taskList');
  const addTaskButton = document.getElementbyId('addTaskbutton');

  addTaskButton.addEventListener('click', function() {
    //O trim() é um método de string em JavaScript que remove quaisquer espaços em branco no início e no final da string
    const taskText = taskInput.value.trim(); //

    if(taskText !== ''){
      const taskItem = document.createElement('li'); // cria um elemento do tipo li
      taskItem.textContent = taskText;

      const deleteButton = document.createElement('button'); // cria um elemento do tipo botton

      taskItem.oppendChild(deleteButton);
      taskList.oppendChild(taskItem);


      deleteButton.addEventlistener('click', function(){
        taskItem.remove();
      });
      taskInput.value = '';
    }
  });
});