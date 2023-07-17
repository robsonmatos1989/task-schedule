$(document).ready(function() {
        $('#addTaskButton').click(function() {
          const taskInput = $('#taskInput').val();

          if (taskInput.trim() !== '') {
            const taskItem = $('<li>').text(taskInput);
            const deleteButton = $('<button>').text('Excluir');
            taskItem.append(deleteButton);
            $('#taskList').append(taskItem);

            deleteButton.click(function() {
              taskItem.remove();
            });

            $('#taskInput').val('');
          }
        });
      });