function addTodo() {
    // Declare input
    let input = document.getElementById('new-todo'); //Comes from input element
    let text = input.value.trim(); //Removes whitespace with .trim()
    // If text is empty throw an alert
    if (text === '') {
        alert('Please enter a valid to-do item.');
        return;
    }

    let todoList = document.getElementById('todo-list'); // Unordered list
    let newItem = document.createElement('li'); // List element
    // Set content of newItem equal to user input
    newItem.textContent = text;
    newItem.classList.add('todo-item'); // Give the newItem class of 'todo-item'
    // Function to remove newItem from list when clicked
    newItem.addEventListener('click', function() {
        this.remove();
    });
    // Append newItem to todoList
    todoList.appendChild(newItem);
    // Clear out input from text box
    input.value = '';
}