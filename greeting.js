const form = document.querySelector(".js-nameInput");
const input = form.querySelector("input"); 
const greeting = document.querySelector(".js-greeting");

const NAME = "name";
const SHOWING = "showing";

function paintName(name){
    form.classList.remove(SHOWING);
    greeting.innerText = `Have a Good Day ${name}`;
}

function saveName(name){
    localStorage.setItem(NAME,name);
}

function getName(event){
    event.preventDefault();
    paintName(input.value);
    saveName(input.value);
    input.value = "";
}

function loadName(){
    const loadedName = localStorage.getItem(NAME);
    if(loadedName === null){
        form.classList.add(SHOWING);
        form.addEventListener("submit", getName);
    }else{
        paintName(loadedName);
    }
}

function init(){
    loadName();
}

init();