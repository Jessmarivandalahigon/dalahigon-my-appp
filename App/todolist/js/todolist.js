// JavaScript for Todo List
function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    var taskList = document.getElementById('taskList');

    if (taskInput.trim() !== '') {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(taskInput));
        taskList.appendChild(li);
        document.getElementById('taskInput').value = '';
    }
}
