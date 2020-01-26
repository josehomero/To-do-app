var todoList = document.querySelector('ul');
var input = document.getElementById('user-todo');
var form = document.querySelector('form');
var button = document.getElementById('clear');
var rightButton = document.getElementById('line-through');



form.addEventListener('submit', function(e) {
    e.preventDefault();
    todoMaker(input.value);
    input.value = '';
});

todoList.addEventListener('click', removeItem);

var todoMaker = function(text) {
    var todo = document.createElement('li');
    todo.textContent = text;
    todoList.appendChild(todo);
    var deleteBtn = document.createElement('button');
    todo.appendChild(deleteBtn);
    deleteBtn.appendChild(document.createTextNode('X'));
    var slashBtn = document.createElement('button');
    todo.appendChild(slashBtn);
    slashBtn.appendChild(document.createTextNode('-'));
    slashBtn.addEventListener('click', lineThrough);

}

button.addEventListener('click', function() {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
});

rightButton.addEventListener('click', lineThrough);


function lineThrough(a){
    if(a.target.textContent.includes('-')){
        var slash= a.target.parentElement;
        slash.style.textDecoration = "line-through";
    }
}

function removeItem(e){
    if(e.target.textContent.includes('X')){
        var li = e.target.parentElement;
        todoList.removeChild(li);
    }
}

