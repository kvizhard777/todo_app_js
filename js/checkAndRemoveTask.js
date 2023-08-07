// Check and Remove Task Function
const checkAndRemoveTask = (e) => {
  const target = e.target;

  // Check Task
  if (target.classList.contains('todo__block')) {
    const todoBlockImg = target.querySelector('.todo__block-img');
    target.classList.toggle('checked');
    
    if (target.classList.contains('checked')) {
      todoBlockImg.src = 'images/checked.svg';
    } else {
      todoBlockImg.src = 'images/unchecked.svg';
    }

  // Remove Task
  } else if (target.classList.contains('delete')) {
    const todoBlock = target.closest('.todo__block');
    
    if (todoBlock) {
      todoBlock.remove();
    }
  }
}

export default checkAndRemoveTask;