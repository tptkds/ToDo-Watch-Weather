const toDoForm = document.querySelector(".js-todoInput"),
    toDoInput = toDoForm.querySelector("input");
    toDoList = document.querySelector(".js-todoList");

const TODOS = "todos";
let toDos = [];

function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const filterToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = filterToDos;
    saveToDo();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", delToDo);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj ={
        text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function handleSubmit(event){
    event.preventDefault();
    const text = toDoInput.value;
    paintToDo(text);
    toDoInput.value = "";
}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS);
    if(loadedToDos !== null){
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();