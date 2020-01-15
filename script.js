// add item
function addToDo(item) {
    const input = document.querySelector("input[type=text]");
    const list = document.querySelector('ul');
    const li = document.createElement('li');
    
    const text = input.value;
    li.textContent = text; 
    
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add = "delete-button";
    deleteButton.textContent = 'Delete';
    
    li.appendChild(deleteButton);
    list.appendChild(li);
    input.value = '';
}



// get add button
const addButton = document.querySelector('button')
addButton.addEventListener('click', addToDo);



const listItem = document.querySelectorAll('ul li');


function deleteToDo() {
    console.log('delete')
}

function modifyToDo() {
    console.log('hi')
}