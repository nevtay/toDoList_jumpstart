// event delegation: putting event listener on parent ele to reach children

function toggleComplete(e) {
        e.target.nextSibling.classList.toggle('done');
        // e.target.nextSibling.classList.toggle('done');
};

function removeItem(e) {
    console.log(e.target.parentElement);
    e.target.closest('li').remove()
}

function editTask(e) {
        e.target.nextElementSibling.nextElementSibling.setAttribute('contenteditable', true);
        e.target.nextElementSibling.nextElementSibling.focus();
}

function createContent(inputText) {
    const content = document.createElement('p');
    content.textContent = inputText;
    // content.append(createDeleteButton());
    // content.append(createEditButton());
    content.classList.add("todo");
    // content.addEventListener('click', toggleComplete)
    return content;
}

function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener('click', removeItem)
    return deleteButton;
}

function createEditButton() {
    const editButton = document.createElement('button');
    editButton.textContent = 'Modify';
    editButton.classList.add("modify-button");
    editButton.addEventListener('click', editTask)
    return editButton;
}

// add item
function addItemToList(e) {
    const input = document.querySelector("input[type=text]");
    
    if (!input.value) {
        return;
    }
    
    if (e.key === "Enter" || event.type === 'click') {
        const list = document.querySelector('ul');
        const item = createContent(input.value)

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.addEventListener('click', toggleComplete);

        const liWrapper = document.createElement('li');

        liWrapper.appendChild(createDeleteButton());
        liWrapper.appendChild(createEditButton());
        liWrapper.appendChild(checkbox);
        liWrapper.appendChild(item);

        list.appendChild(liWrapper);

    input.value = '';
    }
}


const addButton = document.querySelector('.list-add-item')
const input = document.querySelector('input[type=text]');
input.addEventListener('keyup', addItemToList);
addButton.addEventListener('click', addItemToList);