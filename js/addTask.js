// Add Task Function
const addTask = () => {
  const taskInput = document.querySelector('.todo__add-input');
  const task = taskInput.value;

  // If Input Is Empty
  if (!task) {
    alert("Please, write something");
    return;
  }

  // Create New todoBlock
  const todoList = document.querySelector('.todo__list');
  const todoBlock = document.createElement('li');
  todoBlock.className = 'todo__block';

  const todoBlockContent = `
  <div class="todo__block-wrapper">
    <img src="images/unchecked.svg" class="todo__block-img">
    <h2 class="todo__block-text">${task}</h2>
  </div>
  
  <div class="todo__block-btns">
    <button class="todo__block-btn delete" type="button"><img src="images/delete.svg" class="todo__block-btn-img">Delete</button>
  </div>
  `;

  // Adding todoBlock
  todoBlock.innerHTML = todoBlockContent;
  todoList.appendChild(todoBlock);

  taskInput.value = "";
}

export default addTask;