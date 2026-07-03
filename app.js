<script>
        let tasks = [];

        const taskInput= document.querySelector('#task-input');
        const jsAddBtn= document.querySelector('#js-add-btn');
        const taskList= document.querySelector('#task-list');
        const taskCounter= document.querySelector('#task-counter');
        const emptyMsg= document.querySelector('#empty-msg');

        function renderTasks() {
            taskList.innerHTML = '';

            emptyMsg.style.display = tasks.length === 0 ? 'block' : 'none';

            const remaining = tasks.filter(t => !t.done).length;
            taskCounter.textContent = remaining + ' tasks remaining';

            tasks.forEach(function(task, index) {
            const li = document.createElement('li');
            li.className = 'task-item' + (task.done ? ' is-done' : '');

            const checkBtn = document.createElement('button');
            checkBtn.className = 'js-check-btn';
            checkBtn.textContent = task.done ? '✓' : '';

            const span = document.createElement('span');
            span.className = 'task-text';
            span.textContent = task.text;

            const delBtn = document.createElement('button');
            delBtn.className = 'js-delete-btn';
            delBtn.textContent = '✕';

            li.appendChild(checkBtn);
            li.appendChild(span);
            li.appendChild(delBtn);
            taskList.appendChild(li);

            taskList.appendChild(li);

            checkBtn.addEventListener('click', function() {
                 toggleTask(index);
    });

            delBtn.addEventListener('click', function() {
                 deleteTask(index);
    });

    
    });
}

function addTask() {
  const text = taskInput.value.trim();

  if (text === '') {
    taskInput.focus();
    return;
  }

  tasks.push({ text: text, done: false });
  taskInput.value = '';
  taskInput.focus();

  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

jsAddBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

renderTasks();

    </script>