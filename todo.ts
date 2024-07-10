function addTodo() {
    // Declare input
    const input = document.getElementById('new-todo') as HTMLInputElement | null; // Assert type to HTMLInputElement or null
    if (!input) {
        throw new Error("Element 'new-todo' not found"); // Handle case where element is not found
    }

    const text = input.value.trim(); // Ensure value is trimmed

    // If text is empty throw an alert
    if (text === '') {
        alert('Please enter a valid to-do item.');
        return;
    }

    const todoList = document.getElementById('todo-list') as HTMLUListElement | null; // Assert type to HTMLUListElement or null
    if (!todoList) {
        throw new Error("Element 'todo-list' not found"); // Handle case where element is not found
    }

    const newItem = document.createElement('li'); // Create list element
    newItem.textContent = text; // Set text content of new item
    newItem.classList.add('todo-item'); // Add class to new item

    // Function to remove newItem from list when clicked
    newItem.addEventListener('click', function() {
        this.remove();
    });

    // Append newItem to todoList
    todoList.appendChild(newItem);

    // Clear out input from text box
    input.value = '';
}