const ulElement = document.querySelector("#todo-list");

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = document.getElementById('user-todo');
    createTodoLiEl(input.value);
    input.value = '';
});

const button = document.getElementById('clear');
button.addEventListener('click', function () {
    while (ulElement.firstChild) {
        ulElement.removeChild(ulElement.firstChild);
    }
});

const createTodoLiEl = function (text) {
    var todoLil = document.createElement('li');
    todoLil.textContent = text;
    ulElement.appendChild(todoLil);

    var deleteBtn = createDeleteButton();
    todoLil.appendChild(deleteBtn)

    var slashBtn = createSlashButton()
    todoLil.appendChild(slashBtn);
}

function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.addEventListener('click', function (e) {
        if (e.target.textContent.includes('X')) {
            var li = e.target.parentElement;
            ulElement.removeChild(li);
        }
    });
    return deleteBtn;
}

function createSlashButton() {
    var slashBtn = document.createElement('button');
    slashBtn.appendChild(document.createTextNode('-'));
    slashBtn.addEventListener('click', function (e) {
        if (e.target.textContent.includes('-')) {
            var slash = e.target.parentElement;
            if (slash.style.textDecoration === 'line-through') {
                slash.style.textDecoration = 'none';
            } else {
                slash.style.textDecoration = 'line-through';
            }
        }
    });

    return slashBtn
}